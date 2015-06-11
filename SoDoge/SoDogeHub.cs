using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace Sandbox.SignalR.Web.SoDoge
{
    public class SoDogeHub : Hub
    {
        public async Task MuchMoved(int x, int y)
        {
            await Clients.All.soMoved(Context.ConnectionId, x, y);
        }
    }
}