namespace BlotzTask.Models
{
    public class TaskStatusResultDTO
    {
        public int Id { get; set; }
        public DateTime UpdatedAt { get; set; }
        public string Message {get; set;} = string.Empty;
    }
}