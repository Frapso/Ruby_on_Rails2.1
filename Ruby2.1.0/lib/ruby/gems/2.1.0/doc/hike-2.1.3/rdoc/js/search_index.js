var search_data = {"index":{"searchIndex":["hike","cachedtrail","extensions","fileutils","normalizedarray","paths","trail","<<()","[]=()","alias_extension()","append_extension()","append_extensions()","append_path()","append_paths()","cached()","cached()","collect!()","entries()","entries()","extract_options!()","find()","find()","find_all()","find_all()","find_in_base_path()","find_in_paths()","index()","index()","insert()","map!()","match()","new()","new()","new()","new()","normalize_element()","normalize_element()","normalize_elements()","normalize_extension()","paths_contain?()","pattern_for()","prepend_extension()","prepend_extensions()","prepend_path()","prepend_paths()","push()","relative?()","remove_extension()","remove_path()","replace()","root()","sort_matches()","stat()","stat()","unalias_extension()","unshift()"],"longSearchIndex":["hike","hike::cachedtrail","hike::extensions","hike::fileutils","hike::normalizedarray","hike::paths","hike::trail","hike::normalizedarray#<<()","hike::normalizedarray#[]=()","hike::trail#alias_extension()","hike::trail#append_extension()","hike::trail#append_extensions()","hike::trail#append_path()","hike::trail#append_paths()","hike::cachedtrail#cached()","hike::trail#cached()","hike::normalizedarray#collect!()","hike::cachedtrail#entries()","hike::fileutils#entries()","hike::cachedtrail#extract_options!()","hike::cachedtrail#find()","hike::trail#find()","hike::cachedtrail#find_all()","hike::trail#find_all()","hike::cachedtrail#find_in_base_path()","hike::cachedtrail#find_in_paths()","hike::cachedtrail#index()","hike::trail#index()","hike::normalizedarray#insert()","hike::normalizedarray#map!()","hike::cachedtrail#match()","hike::cachedtrail::new()","hike::normalizedarray::new()","hike::paths::new()","hike::trail::new()","hike::extensions#normalize_element()","hike::paths#normalize_element()","hike::normalizedarray#normalize_elements()","hike::trail#normalize_extension()","hike::cachedtrail#paths_contain?()","hike::cachedtrail#pattern_for()","hike::trail#prepend_extension()","hike::trail#prepend_extensions()","hike::trail#prepend_path()","hike::trail#prepend_paths()","hike::normalizedarray#push()","hike::cachedtrail#relative?()","hike::trail#remove_extension()","hike::trail#remove_path()","hike::normalizedarray#replace()","hike::trail#root()","hike::cachedtrail#sort_matches()","hike::cachedtrail#stat()","hike::fileutils#stat()","hike::trail#unalias_extension()","hike::normalizedarray#unshift()"],"info":[["Hike","","Hike.html","",""],["Hike::CachedTrail","","Hike/CachedTrail.html","","<p>`CachedTrail` is an internal cached variant of `Trail`. It assumes the file\nsystem does not change between …\n"],["Hike::Extensions","","Hike/Extensions.html","","<p>`Extensions` is an internal collection for tracking extension names.\n"],["Hike::FileUtils","","Hike/FileUtils.html","",""],["Hike::NormalizedArray","","Hike/NormalizedArray.html","","<p>`NormalizedArray` is an internal abstract wrapper class that calls a\ncallback `normalize_element` anytime …\n"],["Hike::Paths","","Hike/Paths.html","","<p>`Paths` is an internal collection for tracking path strings.\n"],["Hike::Trail","","Hike/Trail.html","","<p>`Trail` is the public container class for holding paths and extensions.\n"],["<<","Hike::NormalizedArray","Hike/NormalizedArray.html#method-i-3C-3C","(element)",""],["[]=","Hike::NormalizedArray","Hike/NormalizedArray.html#method-i-5B-5D-3D","(*args)",""],["alias_extension","Hike::Trail","Hike/Trail.html#method-i-alias_extension","(new_extension, old_extension)","<p>Alias `new_extension` to `old_extension`\n"],["append_extension","Hike::Trail","Hike/Trail.html#method-i-append_extension","(*extensions)",""],["append_extensions","Hike::Trail","Hike/Trail.html#method-i-append_extensions","(*extensions)","<p>Append `extension` to `Extensions` collection\n"],["append_path","Hike::Trail","Hike/Trail.html#method-i-append_path","(*paths)",""],["append_paths","Hike::Trail","Hike/Trail.html#method-i-append_paths","(*paths)","<p>Append `path` to `Paths` collection\n"],["cached","Hike::CachedTrail","Hike/CachedTrail.html#method-i-cached","()","<p>`CachedTrail#cached` returns `self` to be compatable with the `Trail`\ninterface.\n"],["cached","Hike::Trail","Hike/Trail.html#method-i-cached","()","<p>`Trail#cached` returns an `CachedTrail` object that has the same interface\nas `Trail`. An `CachedTrail` …\n"],["collect!","Hike::NormalizedArray","Hike/NormalizedArray.html#method-i-collect-21","()",""],["entries","Hike::CachedTrail","Hike/CachedTrail.html#method-i-entries","(path)","<p>A cached version of `Dir.entries` that filters out `.` files and `~` swap\nfiles. Returns an empty `Array` …\n"],["entries","Hike::FileUtils","Hike/FileUtils.html#method-i-entries","(path)","<p>A version of `Dir.entries` that filters out `.` files and `~` swap files.\nReturns an empty `Array` if …\n"],["extract_options!","Hike::CachedTrail","Hike/CachedTrail.html#method-i-extract_options-21","(arguments)",""],["find","Hike::CachedTrail","Hike/CachedTrail.html#method-i-find","(*logical_paths)","<p>The real implementation of `find`. `Trail#find` generates a one time cache\nand delegates here.\n<p>See `Trail#find` …\n"],["find","Hike::Trail","Hike/Trail.html#method-i-find","(*args)","<p>`Trail#find` returns a the expand path for a logical path in the path\ncollection.\n\n<pre>trail = Hike::Trail.new ...</pre>\n"],["find_all","Hike::CachedTrail","Hike/CachedTrail.html#method-i-find_all","(*logical_paths, &block)","<p>The real implementation of `find_all`. `Trail#find_all` generates a one\ntime index and delegates here. …\n"],["find_all","Hike::Trail","Hike/Trail.html#method-i-find_all","(*args, &block)","<p>`Trail#find_all` returns all matching paths including fallbacks and\n\n<pre>shadowed matches.\n\n   trail.find_all(&quot;hike&quot;, ...</pre>\n"],["find_in_base_path","Hike::CachedTrail","Hike/CachedTrail.html#method-i-find_in_base_path","(logical_path, base_path, &block)","<p>Finds relative logical path, `../test/test_trail`. Requires a `base_path`\nfor reference.\n"],["find_in_paths","Hike::CachedTrail","Hike/CachedTrail.html#method-i-find_in_paths","(logical_path, &block)","<p>Finds logical path across all `paths`\n"],["index","Hike::CachedTrail","Hike/CachedTrail.html#method-i-index","()","<p>Deprecated alias for `cached`.\n"],["index","Hike::Trail","Hike/Trail.html#method-i-index","()","<p>Deprecated alias for `cached`.\n"],["insert","Hike::NormalizedArray","Hike/NormalizedArray.html#method-i-insert","(index, *elements)",""],["map!","Hike::NormalizedArray","Hike/NormalizedArray.html#method-i-map-21","()",""],["match","Hike::CachedTrail","Hike/CachedTrail.html#method-i-match","(dirname, basename)","<p>Checks if the path is actually on the file system and performs any syscalls\nif necessary.\n"],["new","Hike::CachedTrail","Hike/CachedTrail.html#method-c-new","(root, paths, extensions, aliases)","<p>`CachedTrail.new` is an internal method. Instead of constructing it\ndirectly, create a `Trail` and call …\n"],["new","Hike::NormalizedArray","Hike/NormalizedArray.html#method-c-new","()",""],["new","Hike::Paths","Hike/Paths.html#method-c-new","(root = \".\")",""],["new","Hike::Trail","Hike/Trail.html#method-c-new","(root = \".\")","<p>A Trail accepts an optional root path that defaults to your current working\ndirectory. Any relative paths …\n"],["normalize_element","Hike::Extensions","Hike/Extensions.html#method-i-normalize_element","(extension)","<p>Extensions added to this array are normalized with a leading `.`.\n\n<pre>extensions &lt;&lt; &quot;js&quot;\nextensions &lt;&lt; &quot;.css&quot; ...</pre>\n"],["normalize_element","Hike::Paths","Hike/Paths.html#method-i-normalize_element","(path)","<p>Relative paths added to this array are expanded relative to `@root`.\n\n<pre>paths = Paths.new(&quot;/usr/local&quot;)\npaths ...</pre>\n"],["normalize_elements","Hike::NormalizedArray","Hike/NormalizedArray.html#method-i-normalize_elements","(elements)",""],["normalize_extension","Hike::Trail","Hike/Trail.html#method-i-normalize_extension","(extension)",""],["paths_contain?","Hike::CachedTrail","Hike/CachedTrail.html#method-i-paths_contain-3F","(dirname)","<p>Returns true if `dirname` is a subdirectory of any of the `paths`\n"],["pattern_for","Hike::CachedTrail","Hike/CachedTrail.html#method-i-pattern_for","(basename)","<p>Returns a `Regexp` that matches the allowed extensions.\n\n<pre class=\"ruby\"><span class=\"ruby-identifier\">pattern_for</span>(<span class=\"ruby-string\">&quot;index.html&quot;</span>) <span class=\"ruby-comment\">#=&gt; /^index(.html|.htm)(.builder|.erb)*$/</span>\n</pre>\n"],["prepend_extension","Hike::Trail","Hike/Trail.html#method-i-prepend_extension","(*extensions)",""],["prepend_extensions","Hike::Trail","Hike/Trail.html#method-i-prepend_extensions","(*extensions)","<p>Prepend `extension` to `Extensions` collection\n"],["prepend_path","Hike::Trail","Hike/Trail.html#method-i-prepend_path","(*paths)",""],["prepend_paths","Hike::Trail","Hike/Trail.html#method-i-prepend_paths","(*paths)","<p>Prepend `path` to `Paths` collection\n"],["push","Hike::NormalizedArray","Hike/NormalizedArray.html#method-i-push","(*elements)",""],["relative?","Hike::CachedTrail","Hike/CachedTrail.html#method-i-relative-3F","(path)",""],["remove_extension","Hike::Trail","Hike/Trail.html#method-i-remove_extension","(extension)","<p>Remove `extension` from `Extensions` collection\n"],["remove_path","Hike::Trail","Hike/Trail.html#method-i-remove_path","(path)","<p>Remove `path` from `Paths` collection\n"],["replace","Hike::NormalizedArray","Hike/NormalizedArray.html#method-i-replace","(elements)",""],["root","Hike::Trail","Hike/Trail.html#method-i-root","()","<p>`Trail#root` returns root path as a `String`. This attribute is immutable.\n"],["sort_matches","Hike::CachedTrail","Hike/CachedTrail.html#method-i-sort_matches","(matches, basename)","<p>Sorts candidate matches by their extension priority. Extensions in the\nfront of the `extensions` carry …\n"],["stat","Hike::CachedTrail","Hike/CachedTrail.html#method-i-stat","(path)","<p>A cached version of `File.stat`. Returns nil if the file does not exist.\n"],["stat","Hike::FileUtils","Hike/FileUtils.html#method-i-stat","(path)","<p>Like `File.stat`. Returns nil if the file does not exist.\n"],["unalias_extension","Hike::Trail","Hike/Trail.html#method-i-unalias_extension","(extension)","<p>Remove the alias for `extension`\n"],["unshift","Hike::NormalizedArray","Hike/NormalizedArray.html#method-i-unshift","(*elements)",""]]}}