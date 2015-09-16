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
              "~/Vendor/angular-touch/angular-touch.js",
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
              "~/Vendor/angular-dynamic-locale/dist/tmhDynamicLocale.js",
              "~/Vendor/jquery.browser/dist/jquery.browser.js"

            };
            bundles.Add<ScriptBundle>("~/bundles/appScripts", new FileSearch { Pattern = "*.js", SearchOption = System.IO.SearchOption.AllDirectories });
            bundles.Add<ScriptBundle>("~/bundles/baseScripts", files);
            files = new[]
            {
                "~/Content/app/app.css"
            };
            bundles.Add<StylesheetBundle>("~/bundles/appStyles", files);
            files = new[]
            {
                "~/Content/app/app.css"
            };
            bundles.Add<StylesheetBundle>("~/bundles/bootstrapStyles", files);
        }
    }
}