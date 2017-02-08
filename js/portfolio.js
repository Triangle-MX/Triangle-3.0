(function() {
    
    var $imgs = $('#gallery .proyecto');
    var $buttons = $('#buttons');
    var tagged = {};
    
    $imgs.each(function() {
        var img = this;
        var tags = $(this).data('tags');
        
        if (tags) {
            tags.split(',').forEach(function(tagName) {
                if (tagged[tagName] == null) {
                    tagged[tagName] = [];
                }
                tagged[tagName].push(img);
            });
        }
    });
    
    $('<a/>', {
        text: 'Mostrar Todo',
        class: 'activo',
        click: function() {
            $(this)
                .addClass('activo')
                .siblings()
                .removeClass('activo');
            $imgs.show();
        }
    }).appendTo('$buttons');
    
    $.each(tagged, function(tagName) {
        $('<a/>', {
            text: tagName + ' (' + tagged[tagName].length + ')',
            click: function() {
            $(this)
                .addClass('activo')
                .siblings()
                .removeClass('activo');
            $imgs
                .hide()
                .filter(tagged[tagName])
                .show();
        }
        }).appendTo($buttons);
    });
}());