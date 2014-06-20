$('#container').isotope({
  itemSelector: '.grid-item',
  getSortData: {
    name: '.name',
    category: '[data-category]'
  },
  sortBy: 'random',
  // layout mode options
  masonry: {
    columnWidth: 300
  }
});