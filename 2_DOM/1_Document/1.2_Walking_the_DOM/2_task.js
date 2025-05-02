// If elem – is an arbitrary DOM element node…

// Is it true that elem.lastChild.nextSibling is always null?
// Is it true that elem.children[0].previousSibling is always null ?
// solution

// Yes, true. The element elem.lastChild is always the last one, it has no nextSibling.
// No, wrong, because elem.children[0] is the first child among elements. But there may exist non-element nodes like text node before it.
