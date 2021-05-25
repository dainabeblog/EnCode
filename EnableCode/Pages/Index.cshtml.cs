using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System.Diagnostics;
using MySql.Data.MySqlClient;

using System.Threading.Tasks;

namespace EnableCode.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public async Task OnGetAsync()
        {
            //// MySQLへの接続情報
            string server = "localhost";
            string database = "my test";
            string user = "root";
            string pass = "";
            string charset = "utf8";
            string connectionString = string.Format("Server={0};Database={1};Uid={2};Pwd={3};Charset={4}", server, database, user, pass, charset);
            //// MySQLへの接続
            //try
            //{
            //    MySqlConnection connection = new MySqlConnection(connectionString);
            //    connection.Open();	// 接続
            //    Console.WriteLine("MySQLに接続しました！");
            //    Debug.WriteLine("MySQLに接続しました");
            //    connection.Close();	// 接続の解除
            //}
            //catch (MySqlException me)
            //{
            //    Console.WriteLine("ERROR: " + me.Message);
            //    Debug.WriteLine("MySQLに接続できません");
            //}

            //公式ドキュメント

            using (MySqlConnection conn = new MySqlConnection(connectionString))
            {
                conn.Open();

                // SQL発行
                string sql = "";
                sql += "SELECT Id as Id, Name as Name FROM mytest";
                //sql += "SELECT * FROM mytest";
                MySqlCommand selectCommand = new MySqlCommand(sql, conn);
                MySqlDataReader results = selectCommand.ExecuteReader();

                // 行ごとにループ
                while (results.Read())
                {
                    Debug.WriteLine("Column 0: {0} Column 1: {1}", results[0], results[1]);
                }
            }
        }
    }
}
