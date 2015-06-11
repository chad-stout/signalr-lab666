using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(Sandbox.SignalR.Web.Startup), "Configuration")]

namespace Sandbox.SignalR.Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            //Microsoft.AspNet.SignalR.StockTicker.Startup.ConfigureSignalR(app);
        }
    }
}