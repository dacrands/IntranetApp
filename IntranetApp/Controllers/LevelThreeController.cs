using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace IntranetApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LevelThreeController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            try
            {
                using var process = new Process();
                process.StartInfo.FileName = @"C:\Users\dacrands\Desktop\python\bootcamp\dist\tictac.exe";
                Console.WriteLine("starting");
                process.StartInfo.UseShellExecute = true;
                process.Start();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return new string[] { "value1", "value2" };
        }

        // GET api/<LevelThreeController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<LevelThreeController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<LevelThreeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LevelThreeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
