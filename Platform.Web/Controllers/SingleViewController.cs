﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Platform.Web.Controllers
{
    public class SingleViewController : Controller
    {
        // GET: SingleView
        public ActionResult Index()
        {
            return View();
        }
        // GET: SingleView
        public ActionResult MenuView()
        {
            return View();
        }
    }
}