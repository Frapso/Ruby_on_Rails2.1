var search_data = {"index":{"searchIndex":["countdescripable","htmlselector","rails","dom","testing","assertions","domassertions","selectorassertions","tagassertions","substitutioncontext","_find_tag()","assert_dom_equal()","assert_dom_not_equal()","assert_no_tag()","assert_select()","assert_select_email()","assert_select_encoded()","assert_size_match!()","assert_tag()","compare_doms()","css_select()","document_root_element()","equal_attribute?()","equal_attribute_nodes?()","equal_children?()","find_all_tag()","find_tag()","fragment()","html_scanner_document()","match()","matcher_for()","nest_selection()","new()","nodeset()","pluralize_element()","selecting_no_body?()","substitutable?()","substitute!()"],"longSearchIndex":["countdescripable","htmlselector","rails","rails::dom","rails::dom::testing","rails::dom::testing::assertions","rails::dom::testing::assertions::domassertions","rails::dom::testing::assertions::selectorassertions","rails::dom::testing::assertions::tagassertions","substitutioncontext","rails::dom::testing::assertions::tagassertions#_find_tag()","rails::dom::testing::assertions::domassertions#assert_dom_equal()","rails::dom::testing::assertions::domassertions#assert_dom_not_equal()","rails::dom::testing::assertions::tagassertions#assert_no_tag()","rails::dom::testing::assertions::selectorassertions#assert_select()","rails::dom::testing::assertions::selectorassertions#assert_select_email()","rails::dom::testing::assertions::selectorassertions#assert_select_encoded()","rails::dom::testing::assertions::selectorassertions#assert_size_match!()","rails::dom::testing::assertions::tagassertions#assert_tag()","rails::dom::testing::assertions::domassertions#compare_doms()","rails::dom::testing::assertions::selectorassertions#css_select()","rails::dom::testing::assertions::selectorassertions#document_root_element()","rails::dom::testing::assertions::domassertions#equal_attribute?()","rails::dom::testing::assertions::domassertions#equal_attribute_nodes?()","rails::dom::testing::assertions::domassertions#equal_children?()","rails::dom::testing::assertions::tagassertions#find_all_tag()","rails::dom::testing::assertions::tagassertions#find_tag()","rails::dom::testing::assertions::domassertions#fragment()","rails::dom::testing::assertions::tagassertions#html_scanner_document()","substitutioncontext#match()","substitutioncontext#matcher_for()","rails::dom::testing::assertions::selectorassertions#nest_selection()","substitutioncontext::new()","rails::dom::testing::assertions::selectorassertions#nodeset()","countdescripable#pluralize_element()","rails::dom::testing::assertions::selectorassertions#selecting_no_body?()","substitutioncontext#substitutable?()","substitutioncontext#substitute!()"],"info":[["CountDescripable","","CountDescripable.html","",""],["HTMLSelector","","HTMLSelector.html","",""],["Rails","","Rails.html","",""],["Rails::Dom","","Rails/Dom.html","",""],["Rails::Dom::Testing","","Rails/Dom/Testing.html","",""],["Rails::Dom::Testing::Assertions","","Rails/Dom/Testing/Assertions.html","",""],["Rails::Dom::Testing::Assertions::DomAssertions","","Rails/Dom/Testing/Assertions/DomAssertions.html","",""],["Rails::Dom::Testing::Assertions::SelectorAssertions","","Rails/Dom/Testing/Assertions/SelectorAssertions.html","","<p>Adds the <code>assert_select</code> method for use in Rails functional test\ncases, which can be used to make assertions …\n"],["Rails::Dom::Testing::Assertions::TagAssertions","","Rails/Dom/Testing/Assertions/TagAssertions.html","","<p>Pair of assertions to testing elements in the HTML output of the response.\n"],["SubstitutionContext","","SubstitutionContext.html","",""],["_find_tag","Rails::Dom::Testing::Assertions::TagAssertions","Rails/Dom/Testing/Assertions/TagAssertions.html#method-i-_find_tag","(conditions)",""],["assert_dom_equal","Rails::Dom::Testing::Assertions::DomAssertions","Rails/Dom/Testing/Assertions/DomAssertions.html#method-i-assert_dom_equal","(expected, actual, message = nil)","<p>Test two HTML strings for equivalency (e.g., equal even when attributes are\nin another order)\n\n<pre># assert ...</pre>\n"],["assert_dom_not_equal","Rails::Dom::Testing::Assertions::DomAssertions","Rails/Dom/Testing/Assertions/DomAssertions.html#method-i-assert_dom_not_equal","(expected, actual, message = nil)","<p>The negated form of <code>assert_dom_equal</code>.\n\n<pre># assert that the referenced method does not generate the specified ...</pre>\n"],["assert_no_tag","Rails::Dom::Testing::Assertions::TagAssertions","Rails/Dom/Testing/Assertions/TagAssertions.html#method-i-assert_no_tag","(*opts)","<p>Identical to <code>assert_tag</code>, but asserts that a matching tag does\n<em>not</em> exist. (See <code>assert_tag</code> for a full discussion …\n"],["assert_select","Rails::Dom::Testing::Assertions::SelectorAssertions","Rails/Dom/Testing/Assertions/SelectorAssertions.html#method-i-assert_select","(*args, &block)","<p>An assertion that selects elements and makes one or more equality tests.\n<p>If the first argument is an element, …\n"],["assert_select_email","Rails::Dom::Testing::Assertions::SelectorAssertions","Rails/Dom/Testing/Assertions/SelectorAssertions.html#method-i-assert_select_email","(&block)","<p>Extracts the body of an email and runs nested assertions on it.\n<p>You must enable deliveries for this assertion …\n"],["assert_select_encoded","Rails::Dom::Testing::Assertions::SelectorAssertions","Rails/Dom/Testing/Assertions/SelectorAssertions.html#method-i-assert_select_encoded","(element = nil, &block)","<p>Extracts the content of an element, treats it as encoded HTML and runs\nnested assertion on it.\n<p>You typically …\n"],["assert_size_match!","Rails::Dom::Testing::Assertions::SelectorAssertions","Rails/Dom/Testing/Assertions/SelectorAssertions.html#method-i-assert_size_match-21","(size, equals, css_selector, message = nil)","<p><code>equals</code> must contain :minimum, :maximum and :count keys\n"],["assert_tag","Rails::Dom::Testing::Assertions::TagAssertions","Rails/Dom/Testing/Assertions/TagAssertions.html#method-i-assert_tag","(*opts)","<p>Asserts that there is a tag/node/element in the body of the response that\nmeets all of the given conditions. …\n"],["compare_doms","Rails::Dom::Testing::Assertions::DomAssertions","Rails/Dom/Testing/Assertions/DomAssertions.html#method-i-compare_doms","(expected, actual)",""],["css_select","Rails::Dom::Testing::Assertions::SelectorAssertions","Rails/Dom/Testing/Assertions/SelectorAssertions.html#method-i-css_select","(*args)","<p>Select and return all matching elements.\n<p>If called with a single argument, uses that argument as a selector. …\n"],["document_root_element","Rails::Dom::Testing::Assertions::SelectorAssertions","Rails/Dom/Testing/Assertions/SelectorAssertions.html#method-i-document_root_element","()",""],["equal_attribute?","Rails::Dom::Testing::Assertions::DomAssertions","Rails/Dom/Testing/Assertions/DomAssertions.html#method-i-equal_attribute-3F","(attr, other_attr)",""],["equal_attribute_nodes?","Rails::Dom::Testing::Assertions::DomAssertions","Rails/Dom/Testing/Assertions/DomAssertions.html#method-i-equal_attribute_nodes-3F","(nodes, other_nodes)",""],["equal_children?","Rails::Dom::Testing::Assertions::DomAssertions","Rails/Dom/Testing/Assertions/DomAssertions.html#method-i-equal_children-3F","(child, other_child)",""],["find_all_tag","Rails::Dom::Testing::Assertions::TagAssertions","Rails/Dom/Testing/Assertions/TagAssertions.html#method-i-find_all_tag","(conditions)",""],["find_tag","Rails::Dom::Testing::Assertions::TagAssertions","Rails/Dom/Testing/Assertions/TagAssertions.html#method-i-find_tag","(conditions)",""],["fragment","Rails::Dom::Testing::Assertions::DomAssertions","Rails/Dom/Testing/Assertions/DomAssertions.html#method-i-fragment","(text)",""],["html_scanner_document","Rails::Dom::Testing::Assertions::TagAssertions","Rails/Dom/Testing/Assertions/TagAssertions.html#method-i-html_scanner_document","()",""],["match","SubstitutionContext","SubstitutionContext.html#method-i-match","(matches, attribute, matcher)",""],["matcher_for","SubstitutionContext","SubstitutionContext.html#method-i-matcher_for","(value)",""],["nest_selection","Rails::Dom::Testing::Assertions::SelectorAssertions","Rails/Dom/Testing/Assertions/SelectorAssertions.html#method-i-nest_selection","(selection)",""],["new","SubstitutionContext","SubstitutionContext.html#method-c-new","()",""],["nodeset","Rails::Dom::Testing::Assertions::SelectorAssertions","Rails/Dom/Testing/Assertions/SelectorAssertions.html#method-i-nodeset","(node)",""],["pluralize_element","CountDescripable","CountDescripable.html#method-i-pluralize_element","(quantity)",""],["selecting_no_body?","Rails::Dom::Testing::Assertions::SelectorAssertions","Rails/Dom/Testing/Assertions/SelectorAssertions.html#method-i-selecting_no_body-3F","(html_selector)",""],["substitutable?","SubstitutionContext","SubstitutionContext.html#method-i-substitutable-3F","(value)",""],["substitute!","SubstitutionContext","SubstitutionContext.html#method-i-substitute-21","(selector, values)",""]]}}