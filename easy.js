function easy() {
    //初始化各種字句
    const line = [,"你太聰明了！","太厲害了吧！","恭喜！","哎呀！","怎麼會這樣？！"];

    //初始化秘密號碼值
    target = parseInt(Math.random()*10)+1;

    alert("歡迎遊玩估數字遊戲，每回合有三次機會，請估由1至10的數值");
    alert("此遊戲有作弊功能，在輸入'689'後即可得到答案");
    alert("如需在遊玩途中結束遊戲，請輸入'88'，輸入後會即時結束遊戲");
    document.write("遊戲開始<br>","&emsp;<br>");

    //初始化條件值
    round = 1;
    win_time = 0;

    //第1回合開始
    for (time=-1; time<=3; time++) {
        if (time == -1) {
            document.write("Round ",round,"<br>");
            time = 1;
            cheat = false;
        }
        
        //輸入數值
        trial = parseInt(prompt("請輸入數值",""));

        //結束遊戲功能
        if (trial == 88) {
            again = 2;
            break;
        }
                        
        //檢測數值是否在範圍內
        check = isNaN(trial);
        while ((trial > 10) || (trial < 1) || (check == true)) {
            if (trial == 689) {
                time--;
                break;
            }
            alert("你輸入的數值不在範圍內，請重新輸入");
            trial = parseInt(prompt("請輸入數值",""));
            check = isNaN(trial);
        }
        
        //作弊功能
        if (trial == 689) {
            alert("答案為"+target);
            cheat = true;
        }
        
        //數值過大或過小提示功能
        if (trial != 689) {
            document.write("數值",time,"為",trial,"<br>");
            if (time != 3) {
                if (trial >= target+2) {
                    alert("數值過大");
                } else if (trial <= target-2) {
                    alert("數值過小");
                } else if (trial != target) {
                    alert("數值很接近了！！");
                }
            }    
        }
        
        //成功估到數值
        if (trial == target) {
            win_time++;

            //宣布結果
            alert(line[time]+"你已成功估到神秘號碼！！");
            if (cheat == true) {
                document.write("WIN (已作弊)<br>");
            } else {
                document.write("WIN<br>");
            }

            //詢問是否想重新遊玩
            again = parseInt(prompt("你想再次遊玩嗎？ ('想'請輸入1、'不想'請輸入2)",""));

            //檢測數值是否正確
            check = isNaN(again);
            while ((again > 2) || (again < 1) || (check == true)) {
                alert("你輸入的數值不正確，請重新輸入");
                again = parseInt(prompt("你想再次遊玩嗎？ ('想'請輸入1、'不想'請輸入2)",""));
                check = isNaN(again);
            }
            
            //退出此回合
            break;
        }
    }

    //回合結束但沒有估到數值
    if (time > 3) {
        //宣布結果
        time--;
        temp = Math.floor(Math.random()*2)+4;
        alert(line[temp]+"第"+round+"回合結束，閣下未能估到神秘號碼:'"+target+"'，再接再厲！！");
        if (cheat == true) {
            document.write("LOSE (已作弊)<br>");
        } else {
            document.write("LOSE<br>");
        }
        
        //詢問是否想重新遊玩
        again = parseInt(prompt("你想再次遊玩嗎？ ('想'請輸入1、'不想'請輸入2)",""));

        //檢測數值是否正確
        check = isNaN(again);
        while ((again > 2) || (again < 1) || (check == true)) {
            alert("你輸入的數值不正確，請重新輸入");
            again = parseInt(prompt("你想再次遊玩嗎？ ('想'請輸入1、'不想'請輸入2)",""));
            check = isNaN(again);
        }
    }

    //重新遊玩
    while (again == 1) {
        //初始化秘密答案值
        target = parseInt(Math.random()*10)+1;

        document.write("&emsp;<br>");
        round++;

        //回合開始
        for (time=-1; time<=3; time++) {
            if (time == -1) {
                document.write("Round ",round,"<br>");
                time = 1;
                cheat = false;
            }

            //輸入數值
            trial = parseInt(prompt("請輸入數值",""));

            //結束遊戲功能
            if (trial == 88) {
                again = 2;
                break;
            }
                            
            //檢測數值是否在範圍內
            check = isNaN(trial);
            while ((trial > 10) || (trial < 1) || (check == true)) {
                if (trial == 689) {
                    time--;
                    break;
                }
                alert("你輸入的數值不在範圍內，請重新輸入");
                trial = parseInt(prompt("請輸入數值",""));
                check = isNaN(trial);
            }

            //作弊功能
            if (trial == 689) {
                alert("答案為"+target);
                cheat = true;
            }
            
            //數值過大或過小提示功能
            if (trial != 689) {
                document.write("數值",time,"為",trial,"<br>");
                if (time != 3) {
                    if (trial >= target+2) {
                        alert("數值過大");
                    } else if (trial <= target-2) {
                        alert("數值過小");
                    } else if (trial != target) {
                        alert("數值很接近了！！");
                    }
                } 
            }
            
            
            //成功估到數值
            if (trial == target) {
                win_time++;

                //宣布結果
                alert(line[time]+"你已成功估到神秘號碼！！");
                if (cheat == true) {
                    document.write("WIN (已作弊)<br>");
                } else {
                    document.write("WIN<br>");
                }
                //終極大獎
                if (win_time == 5) {
                    alert("你已在估數字遊戲中勝出5次！恭喜！恭喜！");
                    alert("⠀⠀⠀⣀⣿⣆⣀⠀⠀⠀⠀⠀⣀⣷⣶⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⣿⡇⢺⣿⣤⣤⣤⣤⣤⣿⡇⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢤⣤⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⢸⣿⠉⠁⠈⢹⣯⣿⡏⢹⣿⠉⠁⢸⣿⣷⡇⠀⠀⠀⠀⠀⠀⠀⣿⡞⠉⠉⣷⡆⠀⠀⠀⠀⠀⠀⠀⠀\n⣤⣼⠿⠀⠀⢠⣤⠀⠀⠀⠀⠀⠀⣤⣤⠀⣿⣧⣤⣤⣤⣤⡄⠀⠀⠿⢧⣤⣤⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀\n⣿⣿⠀⠀⣎⣻⠉⠀⣀⣼⣾⣠⡀⠉⣭⣹⡉⣿⡯⡉⣿⡏⢹⣾⣀⣀⣸⣿⣉⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀\n⣿⣿⠀⠀⠈⠀⠀⠈⠛⠟⠘⠛⠓⠀⠀⠀⠀⠛⠃⠀⠛⠃⠀⠘⠛⣿⡟⢻⣿⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀\n⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣇⣸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⣿⣿⢤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⣿⣿⣻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠛⢻⣾⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⣿⡟⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠈⠉⣿⣿⡇⢀⣀⣀⡀⣸⣿⣀⣀⣀⣀⣿⡇⣼⣿⣿⡇⣸⣿⣿⡏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⣿⣧⣾⠟⠛⢣⣼⣿⡛⠛⠛⠛⣿⣷⣾⠛⠛⣧⣾⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⠉⠉⠉⠀⠀⠈⠉⠉⠁⠀⠀⠀⠉⠉⠉⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n");
                }

                //詢問是否想重新遊玩
                again = parseInt(prompt("你想再次遊玩嗎？ ('想'請輸入1、'不想'請輸入2)",""));

                //檢測數值是否正確
                check = isNaN(again);
                while ((again > 2) || (again < 1) || (check == true)) {
                    alert("你輸入的數值不正確，請重新輸入");
                    again = parseInt(prompt("你想再次遊玩嗎？ ('想'請輸入1、'不想'請輸入2)",""));
                    check = isNaN(again);
                }
                
                //退出此回合
                break;
            }
        }

        //回合結束但沒有估到數值
        if (time > 3) {
            //宣布結果
            temp = Math.floor(Math.random()*2)+4;
            alert(line[temp]+"第"+round+"回合結束，閣下未能估到神秘號碼:'"+target+"'，再接再厲！！");
            if (cheat == true) {
                document.write("LOSE (已作弊)<br>");
            } else {
                document.write("LOSE<br>");
            }

            //詢問是否想重新遊玩
            again = parseInt(prompt("你想再次遊玩嗎？ ('想'請輸入1、'不想'請輸入2)",""));

            //檢測數值是否正確
            check = isNaN(again);
            while ((again > 2) || (again < 1) || (check == true)) {
                alert("你輸入的數值不正確，請重新輸入");
                again = parseInt(prompt("你想再次遊玩嗎？ ('想'請輸入1、'不想'請輸入2)",""));
                check = isNaN(again);
            }
        }
    }
    
    if (again == 2) {
        document.write("&emsp;<br>","遊戲結束");
    }
}
