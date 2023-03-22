using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace practicaRoute.Controllers
{
    public class RenderController : Controller
    {
        [HttpGet()]
        // GET: Render
        public ActionResult GetHtml(string view)
        {
            return View(view);
        }
    }
}