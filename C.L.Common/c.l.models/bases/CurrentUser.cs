

namespace c.l.models.bases
{
    public class CurrentUser
    {
        public int Id { set; get; }
        public string UserName { set; get; }
        public string TrueName { set; get; }
        public string Department { set; get; }

        public string Gender { set; get; }
        public string Email { set; get; }
        public string MobileNo { set; get; }

        public int Encryption { set; get; } = 0;
    }
}