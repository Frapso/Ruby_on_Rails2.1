# -*- encoding: utf-8 -*-
# stub: activerecord-sqlserver-adapter 4.2.3 ruby lib

Gem::Specification.new do |s|
  s.name = "activerecord-sqlserver-adapter"
  s.version = "4.2.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Ken Collins", "Anna Carey", "Will Bond", "Murray Steele", "Shawn Balestracci", "Joe Rafaniello", "Tom Ward"]
  s.date = "2015-02-18"
  s.description = "ActiveRecord SQL Server Adapter."
  s.email = ["ken@metaskills.net", "will@wbond.net"]
  s.homepage = "http://github.com/rails-sqlserver/activerecord-sqlserver-adapter"
  s.rubygems_version = "2.2.3"
  s.summary = "ActiveRecord SQL Server Adapter."

  s.installed_by_version = "2.2.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<activerecord>, ["~> 4.2.0"])
      s.add_development_dependency(%q<bundler>, [">= 0"])
      s.add_development_dependency(%q<guard-minitest>, [">= 0"])
      s.add_development_dependency(%q<minitest>, ["< 5.3.4"])
      s.add_development_dependency(%q<minitest-focus>, [">= 0"])
      s.add_development_dependency(%q<minitest-spec-rails>, [">= 0"])
      s.add_development_dependency(%q<mocha>, [">= 0"])
      s.add_development_dependency(%q<nokogiri>, [">= 0"])
      s.add_development_dependency(%q<pry>, [">= 0"])
      s.add_development_dependency(%q<rake>, [">= 0"])
    else
      s.add_dependency(%q<activerecord>, ["~> 4.2.0"])
      s.add_dependency(%q<bundler>, [">= 0"])
      s.add_dependency(%q<guard-minitest>, [">= 0"])
      s.add_dependency(%q<minitest>, ["< 5.3.4"])
      s.add_dependency(%q<minitest-focus>, [">= 0"])
      s.add_dependency(%q<minitest-spec-rails>, [">= 0"])
      s.add_dependency(%q<mocha>, [">= 0"])
      s.add_dependency(%q<nokogiri>, [">= 0"])
      s.add_dependency(%q<pry>, [">= 0"])
      s.add_dependency(%q<rake>, [">= 0"])
    end
  else
    s.add_dependency(%q<activerecord>, ["~> 4.2.0"])
    s.add_dependency(%q<bundler>, [">= 0"])
    s.add_dependency(%q<guard-minitest>, [">= 0"])
    s.add_dependency(%q<minitest>, ["< 5.3.4"])
    s.add_dependency(%q<minitest-focus>, [">= 0"])
    s.add_dependency(%q<minitest-spec-rails>, [">= 0"])
    s.add_dependency(%q<mocha>, [">= 0"])
    s.add_dependency(%q<nokogiri>, [">= 0"])
    s.add_dependency(%q<pry>, [">= 0"])
    s.add_dependency(%q<rake>, [">= 0"])
  end
end
