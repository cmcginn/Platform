using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Platform.Web.Startup))]
namespace Platform.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
