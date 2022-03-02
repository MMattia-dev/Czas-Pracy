using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Czas_Pracy.Startup))]
namespace Czas_Pracy
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
