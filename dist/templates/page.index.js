this["S"] = this["S"] || {};
this["S"]["templates"] = this["S"]["templates"] || {};
this["S"]["templates"]["page"] = this["S"]["templates"]["page"] || {};
this["S"]["templates"]["page"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "This is "
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " !";
},"useData":true});