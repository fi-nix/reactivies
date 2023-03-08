﻿using Application.Activities;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities() => await Mediator.Send(new List.Query());

        //[HttpGet("{id}")]
        //public async Task<ActionResult<Activity?>> GetActivity(Guid id) => await _context.Activities.FindAsync(id);

    }
}
