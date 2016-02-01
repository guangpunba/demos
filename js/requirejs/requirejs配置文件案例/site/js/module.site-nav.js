define(['jquery'],function() {

    var siteNav = function() {
        var siteProContainer = $('[data-handle="_siteprocontainer"]');
        siteProContainer.on('mouseenter', '[data-handle="_sitepro"]', function(e) {
            var _self = $(this);
            var currPro = _self.find('[data-handle="_sitecurrpro"]').text();

            siteProContainer.find('[data-handle="_sitepros"]').find('a').each(function(ind, item) {
                var _item = $(item);
                var _itemTxt = _item.text();
                if(currPro === _itemTxt) _item.addClass('active');
                else _item.removeClass('active');
            });

            siteProContainer.find('[data-handle="_sitepros"]').toggleClass('siteDis');
            e.stopPropagation();
        });

        siteProContainer.on('mouseleave', '[data-handle="_sitepro"]', function(e) {
            siteProContainer.find('[data-handle="_sitepros"]').toggleClass('siteDis');
            e.stopPropagation();
        });

        siteProContainer.on('mouseenter', '[data-handle="_sitepros"]', function(e) {
            $(this).toggleClass('siteDis');
            e.stopPropagation();
        });

        siteProContainer.on('mouseleave', '[data-handle="_sitepros"]', function(e) {
            $(this).toggleClass('siteDis');
            e.stopPropagation();
        });

        siteProContainer.on('click', 'a', function(e) {
            var _clickPro = $(this).text();
            siteProContainer.find('[data-handle="_sitecurrpro"]').text(_clickPro);
            siteProContainer.find('[data-handle="_sitepros"]').find('a').each(function(ind, item) {
                $(item).removeClass('active');
            });
            $(this).addClass('active');
            e.stopPropagation();
        });



        $('[data-handle="_siteweb"]').on('mouseenter', function(e) {
            $('[data-handle="_sitetype"]').toggleClass('siteDis');
            e.stopPropagation();
        });
        $('[data-handle="_siteweb"]').on('mouseleave', function(e) {
            $('[data-handle="_sitetype"]').toggleClass('siteDis');
            e.stopPropagation();
        });
        $('[data-handle="_sitetype"]').on('mouseenter', function(e) {
            $(this).toggleClass('siteDis');
            e.stopPropagation();
        });
        $('[data-handle="_sitetype"]').on('mouseleave', function(e) {
            $(this).toggleClass('siteDis');
            e.stopPropagation();
        });
    };

    return {
        siteNav:siteNav
    }
});