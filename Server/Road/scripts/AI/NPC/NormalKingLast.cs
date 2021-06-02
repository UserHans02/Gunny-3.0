﻿using System;
using System.Collections.Generic;
using System.Text;
using Game.Logic;
using Game.Logic.AI;
using Game.Logic.Phy.Object;
using Game.Logic.Effects;

namespace GameServerScript.AI.NPC
{
    public class NormalKingLast : ABrain
    {
        private int attackingTurn = 1;

        private int orchinIndex = 1;

        private int currentCount = 0;

        private int Dander = 0;

        private int npcID = 1104;

        public List<SimpleNpc> orchins = new List<SimpleNpc>();

        #region NPC 说话内容
        private static string[] AllAttackChat = new string[]{
             "Nghiên cứu kỹ năng của tôi!",
          
             "Di chuyển mát mẻ!<br/>Bạn muốn tìm hiểu không?",
          
             "Bệnh của nó! ! !<br/>Khiêm tốn để bụi!",

             "Bạn sẽ trả giá cho việc này! "
        };

        private static string[] ShootChat = new string[]{
             "Bạn cù tôi?",
               
             "Tôi không muốn chỉ là lãng phí khi bạn đánh bại!",
             
             "Oh, bạn chơi tốt đau, <br/>ha ha ha ha!",
               
             "Tut tut, vì vậy lực lượng tấn công.",
               
             "Xem tôi là danh dự của bạn!"          
        };

        private static string[] CallChat = new string[]{
            "Các, <br/>cho phép họ thử bom mạnh mẽ!"                          
        };

        private static string[] AngryChat = new string[]{
            "Bạn buộc tôi để lừa!"                          
        };

        private static string[] KillAttackChat = new string[]{
            "Bạn đến chết?"                          
        };

        private static string[] SealChat = new string[]{
            "Extradimensional lưu vong!"                          
        };

        private static string[] KillPlayerChat = new string[]{
            "Địa ngục là điểm đến duy nhất của bạn!",                  
 
            "Quá dễ bị tổn thương."
        };
        #endregion


        public override void OnBeginSelfTurn()
        {
            base.OnBeginSelfTurn();
        }

        public override void OnBeginNewTurn()
        {
            base.OnBeginNewTurn();
            Body.CurrentDamagePlus = 1;
            Body.CurrentShootMinus = 1;
        }

        public override void OnCreated()
        {
            base.OnCreated();
        }

        public override void OnStartAttacking()
        {
            bool result = false;
            int maxdis = 0;
            foreach (Player player in Game.GetAllFightPlayers())
            {
                if (player.IsLiving && player.X > 390 && player.X < 1110)
                {
                    int dis = (int)Body.Distance(player.X, player.Y);
                    if (dis > maxdis)
                    {
                        maxdis = dis;
                    }
                    result = true;
                }
            }

            if (result)
            {
                KillAttack(390, 1110);
                return;
            }

            if (result == true)
            {
                return;
            }

            if (attackingTurn == 1)
            {
                Body.Direction = Game.FindlivingbyDir(Body);
                HalfAttack();
            }
            else if (attackingTurn == 2)
            {
                Body.Direction = -Body.Direction;
                Summon();
            }
            else if (attackingTurn == 3)
            {
                Body.Direction = -Body.Direction;
                Seal();
            }
            else if (attackingTurn == 4)
            {
                Body.Direction = -Body.Direction;
                Angger();
            }
            else
            {
                Body.Direction = -Body.Direction;
                GoOnAngger();
                attackingTurn = 0;
            }
            attackingTurn++;
        }

        public override void OnStopAttacking()
        {
            base.OnStopAttacking();
        }

        public void HalfAttack()
        {
            Body.CurrentDamagePlus = 0.5f;
            int index = Game.Random.Next(0, SealChat.Length);
            Body.Say(AllAttackChat[index], 1, 500);
            Body.PlayMovie("beatB", 2500, 0);
            if (Body.Direction == 1)
            {
                Body.RangeAttacking(Body.X, Body.X + 1000, "cry", 3300, null);
            }
            else
            {
                Body.RangeAttacking(Body.X - 1000, Body.X, "cry", 3300, null);
            }
        }

        public void Summon()
        {
            int index = Game.Random.Next(0, CallChat.Length);
            Body.Say(CallChat[index], 1, 0);
            Body.PlayMovie("beatA", 100, 0);
            Body.CallFuction(new LivingCallBack(CreateChild), 2500);
        }

        public void Seal()
        {
            int index = Game.Random.Next(0, SealChat.Length);
            ((SimpleBoss)Body).Say(SealChat[index], 1, 0);
            Player m_player = Game.FindRandomPlayer();
            Body.PlayMovie("mantra", 2000, 2000);
            Body.Seal(m_player, 1, 3000);
        }

        public void Angger()
        {
            int index = Game.Random.Next(0, AngryChat.Length);
            Body.Say(AngryChat[index], 1, 0);
            Body.State = 1;
            Dander = Dander + 100;
            ((SimpleBoss)Body).SetDander(Dander);
            if (Body.Direction == -1)
            {
                ((SimpleBoss)Body).SetRelateDemagemRect(8, -252, 74, 50);
            }
            else
            {
                ((SimpleBoss)Body).SetRelateDemagemRect(-82, -252, 74, 50);
            }
        }

        public void GoOnAngger()
        {
            if (Body.State == 1)
            {
                Body.CurrentDamagePlus = 1000;
                Body.PlayMovie("beatC", 3500, 0);
                Body.RangeAttacking(Body.X - 1000, Body.X + 1000, "cry", 5600, null);
                Body.Die(5600);
            }
            else
            {
                ((SimpleBoss)Body).SetRelateDemagemRect(-41, -187, 83, 140);

                Body.PlayMovie("mantra", 0, 2000);
                List<Player> players = Game.GetAllLivingPlayers();

                foreach (Player player in players)
                {
                    player.AddEffect(new ContinueReduceBloodEffect(2,-50), 0);
                }
            }
        }

        public void KillAttack(int fx, int mx)
        {
            Body.CurrentDamagePlus = 10;
            int index = Game.Random.Next(0, KillAttackChat.Length);
            ((SimpleBoss)Body).Say(KillAttackChat[index], 1, 500);
            Body.PlayMovie("beatB", 2500, 0);
            Body.RangeAttacking(fx, mx, "cry", 3300, null);
        }

        public void CreateChild()
        {
            ((SimpleBoss)Body).CreateChild(npcID, 520, 530, 400, 6);
        }
    }
}
