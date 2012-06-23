window.Rewards = function() {

    // Our main window (used to store preferences, user data, etc.)
    //window.Rewards  = Backbone.Model.extend();

    // Defines the model for an Offer
    var Offer = Backbone.Model.extend({
        urlRoot: "feeds/offers.json",
        defaults: {
            id:             null,
            offer_type:     0,
            title:          "Tap to Earn Rewards!",
            offer_amount:   "",
            currency_name:  "",
            thumbnail:      "http://www.theblueowl.com/images/menu/coke_logo_button.png",
            destination:    "http://www.burstly.com",
            source:         "Burstly"
        }
    });

    // Contains a list of Offers from the server
    window.OfferList   = Backbone.Collection.extend({
        model:  Offer,
        url:    "feeds/offers.json",
        parse: function(data) { return data.offers; }
    });





    
    // Offer Wall
    window.OfferWallView = Backbone.View.extend({

        tagName:    "ul",
        template:   ich.offer_wall,

        initialize: function(){
            this.model.bind("reset", this.render, this);
            var self = this;
        },

        render: function(){
            _.each(this.model.models, function (offer) {
                $(this.el).append(new OfferWallItem({model:offer}).render().el);
            }, this);
            return this;
        },

        close: function() {
            $("ul#featured").unbind().remove();
        }
    });

    // Wall item
    window.OfferWallItem = Backbone.View.extend({

        tagName:    "li",
        template:   ich.wall_item,

        initialize: function() {
            this.model.bind("change", this.render, this);
            this.model.bind("destroy", this.close, this);
        },

        render:function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        },

        close: function() {
            $(this.el).unbind();
            $(this.el).remove();
        }
    });

    // View a single Offer
    window.OfferView = Backbone.View.extend({
        initialize: function(){
            this.model.bind("reset", this.render, this);
        },
        template: ich.view_offer,
        render: function(){
            $("#wrapper").append(ich.view_offer(this.model.toJSON()));
        }
    });



    // Router
    var AppRouter = Backbone.Router.extend({

        routes: {
            "":"wall",
            "offer/:id":"viewOffer"
        },

        wall: function() {
            this.offerList  = new OfferList();
            var self = this;
            this.offerList.fetch({
                success: function() {
                    self.wallView  = new OfferWallView({ model: self.offerList });
                    $("#wrapper").html(self.wallView.render().el);
                    if(self.requestedId) self.viewOffer(self.requestedId);
                }
            });
        },

        viewOffer: function(id) {
            if (this.offerList) {
                this.offer = this.offerList.get(id);
                if (this.offerView) this.offerView.close();
                this.offerView = new OfferView({ model: this.offer });
                $("#wrapper").html(this.offerView.render());
            } else {
                this.requestedId = id;
                this.wall();
            }
        }

    });





    // Load our templates from JSON (TODO: make a more-robust, lazy-loading template manager)
    // $.getJSON('templates/templates.json', function (templates) {
        // Prepare our templates for usage in the app
    //     $.each(templates, function (id, template) {
    //         ich.addTemplate(template.name, template.template);
    //     });
    // });

    // After loading, initialize the app
    window.Rewards.App = new AppRouter();
    Backbone.history.start();

};

$(function() {
    window.Rewards();
});









