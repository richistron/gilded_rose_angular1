require 'thor'

class Tools < Thor
  include Thor::Actions

  desc 'build', 'creates docker image'

  method_option :push, type: :boolean, aliases: '-p'

  def build
    puts
    build_branch
  end

  private
  def build_branch
    run "docker build -t  #{get_image_name} ."
    run "docker push #{get_image_name} ." if options[:push]
  end

  def get_branch
    @branch ||= run( 'git rev-parse --abbrev-ref HEAD', capture: true ).gsub(/\n/, '')
    return 'latest' if @branch === 'master'
    @branch
  end

  def get_image_name
    "richistron/gilded_rose_angular1:#{ get_branch }"
  end
end


Tools.start(ARGV)
