using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlotzTask.Models
{
    public class AddTaskItemDTO
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateOnly DueDate { get; set; }
        public int LabelId { get; set; }
    }
}