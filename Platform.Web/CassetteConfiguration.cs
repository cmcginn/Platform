using Cassette;
using Cassette.Scripts;
using Cassette.Stylesheets;

namespace Platform.Web
{
    /// <summary>
    /// Configures the Cassette asset bundles for the web application.
    /// </summary>
    public class CassetteBundleConfiguration : IConfiguration<BundleCollection>
    {
        public void Configure(BundleCollection bundles)
        {
            var files = new[] 
            {
              
              "~/Vendor/modernizr/modernizr.js",
              "~/Vendor/jquery/dist/jquery.js",
              "~/Vendor/angular/angular.js",
              "~/Vendor/angular-route/angular-route.js",
              "~/Vendor/angular-cookies/angular-cookies.js",
              "~/Vendor/angular-animate/angular-animate.js",
              "~/Vendor/angular-ui-router/release/angular-ui-router.js",
              "~/Vendor/ngstorage/ngStorage.js",
              "~/Vendor/angular-ui-utils/ui-utils.js",
              "~/Vendor/angular-sanitize/angular-sanitize.js",
              "~/Vendor/angular-resource/angular-resource.js",
              "~/Vendor/angular-translate/angular-translate.js",
              "~/Vendor/angular-translate-loader-url/angular-translate-loader-url.js",
              "~/Vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.js",
              "~/Vendor/angular-translate-storage-local/angular-translate-storage-local.js",
              "~/Vendor/angular-translate-storage-cookie/angular-translate-storage-cookie.js",
              "~/Vendor/oclazyload/dist/ocLazyLoad.js",
              "~/Vendor/angular-bootstrap/ui-bootstrap-tpls.js",
              "~/Vendor/angular-loading-bar/build/loading-bar.js",
              "~/Vendor/jquery.browser/dist/jquery.browser.js",
              "~/Vendor/lodash/lodash.js",
              "~/Vendor/sprintf/dist/angular-sprintf.min.js",
              "~/Vendor/ngDialog/js/ngDialog.min.js",
              "~/Vendor/angular-multi-select-master/isteven-multi-select.js"
              

            };
            bundles.Add<ScriptBundle>("~/Scripts", new FileSearch {  Pattern = "*.js", SearchOption = System.IO.SearchOption.AllDirectories });
            bundles.Add<ScriptBundle>("~/BaseScripts", files);
            files = new[]
            {
                "~/Content/app/app.css"
            };
            bundles.Add<StylesheetBundle>("~/AppStyles", files);
            files = new[]
            {
                "~/Content/app/bootstrap.css",
           
            };
            bundles.Add<StylesheetBundle>("~/BootstrapStyles", files);
            files = new[]
            {
                "~/Vendor/ngDialog/css/ngDialog.min.css",
                "~/Vendor/angular-multi-select-master/isteven-multi-select.css",
                "~/Vendor/whirl/dist/whirl.css"
            };
            //test
            files = new[]
            {
                "~/Vendor/jasmine/lib/jasmine-2.3.4/jasmine.js",
                "~/Vendor/jasmine/lib/jasmine-2.3.4/jasmine-html.js",
                "~/Vendor/jasmine/lib/jasmine-2.3.4/boot.js",
                "~/Vendor/requirejs/require.js",
                "~/Vendor/angular-mocks/angular-mocks.js"
            };
            bundles.Add<ScriptBundle>("~/Test", files);
            bundles.Add<StylesheetBundle>("~/Test", new[] { "~/Vendor/jasmine/lib/jasmine-2.3.4/jasmine.css" });
        }
    }
}