module Jekyll
  class TabGroupTag < Liquid::Block
    def initialize(tag_name, category, tokens)
      super
      @category = category.strip.delete('"\'')
    end

    def render(context)
      content = super
      
      # Split content by level 2 headings (##)
      sections = parse_sections(content)
      
      # Generate HTML
      generate_html(@category, sections)
    end

    private

    def parse_sections(content)
      sections = []
      current_section = nil

      content.lines.each do |line|
        # Match ## Heading (level 2)
        if line =~ /^##\s+(.+)$/
          label = $1.strip
          value = normalize_value(label)
          current_section = { label: label, value: value, content: [] }
          sections << current_section
        elsif current_section && line.strip != ""
          current_section[:content] << line
        elsif current_section && line.strip == ""
          # Preserve blank lines within section content
          current_section[:content] << line
        end
      end

      # Remove trailing blank lines from each section
      sections.each do |section|
        section[:content] = section[:content].join.strip
      end

      sections
    end

    def normalize_value(label)
      # Convert label to value: "VS Code" -> "vscode", "macOS" -> "macOS"
      # Keep camelCase, convert spaces to nothing, lowercase
      label.gsub(/\s+/, '').gsub(/[^a-zA-Z0-9]/, '').downcase
    end

    def generate_html(category, sections)
      return "" if sections.empty?

      # Generate button HTML
      buttons_html = sections.map.with_index do |section, index|
        active = index == 0 ? ' class="active"' : ''
        "<button#{active} data-category=\"#{category}\" data-value=\"#{section[:value]}\"><img src=\"/assets/static/#{section[:value]}.svg\" alt=\"#{section[:label]}\" /> #{section[:label]}</button>"
      end.join("\n    ")

      # Generate panel HTML with markdownified content
      panels_html = sections.map.with_index do |section, index|
        active = index == 0 ? ' active' : ''
        panel_id = "panel-#{category}-#{section[:value]}"
        markdownified_content = markdownify(section[:content])
        "<div id=\"#{panel_id}\" class=\"tab-panel#{active}\" data-category=\"#{category}\">\n#{indent(markdownified_content, 4)}\n  </div>"
      end.join("\n  ")

      <<~HTML
        <div class="tab-container">
          <div class="tab-buttons">
            #{buttons_html}
          </div>

          #{panels_html}
        </div>
      HTML
    end

    def markdownify(content)
      # Use Kramdown directly
      require 'kramdown'
      html = Kramdown::Document.new(content).to_html
      # Remove outer <p> tags if present
      html.gsub(/<\/?p>/, '').strip
    end

    def indent(text, spaces)
      text.lines.map { |line| ' ' * spaces + line }.join
    end
  end
end

Liquid::Template.register_tag('tab_group', Jekyll::TabGroupTag)
