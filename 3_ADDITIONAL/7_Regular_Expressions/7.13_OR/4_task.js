// Write a regexp to find the tag <style...>. It should match the full tag: it may have no attributes <style> or have several of them <style type="..." id="...">.

// …But the regexp should not match <styler>!

// For instance:

let regexp = /<style(>|\s.*?>)/g;

alert( '<style> <styler> <style test="...">'.match(regexp) ); // <style>, <style test="...">