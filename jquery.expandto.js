(function($) {
  /**
   * Plugin to expand an img (or maybe any element?) to fill the provided $container element
   */
  $.fn.expandTo = function expandTo($container) {
    return this.each(function(){
      var $this = $(this);
      // Fill the provided bg img out to the full container size
      $this.css({ 'width': '100%', 'height': 'auto' });
      // Make sure it's centered horizontally and vertically
      if ($this.height() > $container.height()) {
        $this.css('top', '-' + Math.floor(($this.height() - $container.height()) / 2) + 'px' );
      } else {
        $this.height($container.height()).css({ 'width': 'auto', 'top': '0' });
      }
      $this.css( 'left', ( $container.width() - $container.width() ) / 2 );
    });
  }
})(jQuery);
