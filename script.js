var playerSign = 'X';
var compSign = 'O';

var userScore = '0';
var compScore = '0';

$(document).ready(function(){
    //Увеличение на 120%
    document.body.style.zoom = "120%";

    var exit_flag = false;
    var win_user_array = ['123','456','789','147','258','369','159','357'];
         
    //Определяем победу игрока
    function check_3_user(sign){
        for (var i = 0; i < 8; i++) {
         
            var first = 'kletka' + win_user_array[i].substr(0,1);
            var second = 'kletka' + win_user_array[i].substr(1,1);
            var third = 'kletka' + win_user_array[i].substr(2,1);
             
            if( $('.'+first).text() == sign && $('.'+second).text() == sign && $('.'+third).text() == sign ){
                $('.kletka1, .kletka2, .kletka3, .kletka4, .kletka5, .kletka6, .kletka7, .kletka8, .kletka9').css("background-color", "#FFF");
                $('.'+first+',.'+second+',.'+third).css("background-color", "#83e2c3");
                $('.result').text('Ви виграли!');
                $('.MAIN_DIV .div').unbind('click');
                userScore++;
                Score();
                exit_flag = true;
            }    
        }
    }
     
    //Определяем возможность победы компьютера
    function check_2_comp(sign){
        for (var i = 0; i < 8; i++) {
         
            var first = 'kletka' + win_user_array[i].substr(0,1);
            var second = 'kletka' + win_user_array[i].substr(1,1);
            var third = 'kletka' + win_user_array[i].substr(2,1);
             
            if( $('.'+first).text() == sign && $('.'+second).text() == sign && $('.'+third).text() == '' && exit_flag == false ){
                $('.'+third).text(sign);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Ви програли :(');
                $('.MAIN_DIV .div').unbind('click');
                compScore++;
                Score();
                exit_flag = true;
            }    
             
            if( $('.'+first).text() == sign && $('.'+second).text() == '' && $('.'+third).text() == sign && exit_flag == false ){
                $('.'+second).text(sign);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Ви програли :(');
                $('.MAIN_DIV .div').unbind('click');
                compScore++;
                Score();
                exit_flag = true;
            }    
             
            if( $('.'+first).text() == '' && $('.'+second).text() == sign && $('.'+third).text() == sign && exit_flag == false ){
                $('.'+first).text(sign);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Ви програли :(');
                $('.MAIN_DIV .div').unbind('click');
                compScore++;
                Score();
                exit_flag = true;
            }    
        }
    }
     
    //Определяем ход компьютера
    function check_2_user(sign){
 
        for (var i = 0; i < 8; i++) {
         
            var first = 'kletka' + win_user_array[i].substr(0,1);
            var second = 'kletka' + win_user_array[i].substr(1,1);
            var third = 'kletka' + win_user_array[i].substr(2,1);
 
             
            if( exit_flag == false ){
                if( $('.'+first).text() == sign && $('.'+second).text() == sign && $('.'+third).text() == '' ){
                    $('.'+third).text(compSign);
                    exit_flag = true;
                }
            }
                         
            if( exit_flag == false ){
                if( $('.'+first).text() == sign && $('.'+second).text() == '' && $('.'+third).text() == sign ){
                    $('.'+second).text(compSign);
                    exit_flag = true;
                }    
            }    
             
            if( $('.'+first).text() == '' && $('.'+second).text() == sign && $('.'+third).text() == sign ){
                $('.'+first).text(compSign);
                exit_flag = true;
            }
            
            if(exit_flag) break;
        }
    }
     
    $('.MAIN_DIV .div').click(function(){
        //Если клетка пустая
        if( $(this).text() == '' ){
            $(this).text(playerSign); 
            CHECK();   
            check_3_user(playerSign);
            check_2_comp(compSign);
            check_2_user(playerSign);
            if( exit_flag == false ){
                for (var i = 1; i < 10; i++) {    
                    if( $('.kletka'+i).text() == '' ){
                        $('.kletka'+i).text(compSign);
                        break;
                    }    
                }
            }else exit_flag = false;
        }
    });
});

function Restart(){
    $('.result').text('Твій хід!');
    $('.kletka1, .kletka2, .kletka3, .kletka4, .kletka5, .kletka6, .kletka7, .kletka8, .kletka9').text('');
    $('.kletka1, .kletka2, .kletka3, .kletka4, .kletka5, .kletka6, .kletka7, .kletka8, .kletka9').css("background-color", "#FFF");
    $( ".MAIN_DIV .div" ).bind("click", function (){
 
        //Если клетка пустая
        if( $(this).text() == '' ){
            $(this).text(playerSign);    
            check_3_user(playerSign);
            check_2_comp(compSign);
            check_2_user(playerSign);
             
            if( exit_flag == false ){
                for (var i = 1; i < 10; i++) {    
                    if( $('.kletka'+i).text() == '' ){
                        $('.kletka'+i).text(compSign);
                        break;
                    }    
                }
            }else exit_flag = false;
        }
    });
}

var exit_flag = false;
var win_user_array = ['123','456','789','147','258','369','159','357'];
     
//Определяем победу игрока
function check_3_user(sign){
    for (var i = 0; i < 8; i++) {
        CHECK();
        var first = 'kletka' + win_user_array[i].substr(0,1);
        var second = 'kletka' + win_user_array[i].substr(1,1);
        var third = 'kletka' + win_user_array[i].substr(2,1);
         
        if( $('.'+first).text() == sign && $('.'+second).text() == sign && $('.'+third).text() == sign ){
            $('.kletka1, .kletka2, .kletka3, .kletka4, .kletka5, .kletka6, .kletka7, .kletka8, .kletka9').css("background-color", "#FFF");
            $('.'+first+',.'+second+',.'+third).css("background-color", "#83e2c3");
            $('.result').text('Ви виграли!');
            $('.MAIN_DIV .div').unbind('click');
            userScore++;
            Score();
            exit_flag = true;
        }     
    }
}
 
//Определяем возможность победы компьютера
function check_2_comp(sign){
    for (var i = 0; i < 8; i++) {
     
        var first = 'kletka' + win_user_array[i].substr(0,1);
        var second = 'kletka' + win_user_array[i].substr(1,1);
        var third = 'kletka' + win_user_array[i].substr(2,1);
         
        if( $('.'+first).text() == sign && $('.'+second).text() == sign && $('.'+third).text() == '' && exit_flag == false ){
            $('.'+third).text(sign);
            $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
            $('.result').text('Ви програли :(');
            $('.MAIN_DIV .div').unbind('click');
            compScore++;
            Score();
            exit_flag = true;
        }    
         
        if( $('.'+first).text() == sign && $('.'+second).text() == '' && $('.'+third).text() == sign && exit_flag == false ){
            $('.'+second).text(sign);
            $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
            $('.result').text('Ви програли :(');
            $('.MAIN_DIV .div').unbind('click');
            compScore++;
            Score();
            exit_flag = true;
        }    
         
        if( $('.'+first).text() == '' && $('.'+second).text() == sign && $('.'+third).text() == sign && exit_flag == false ){
            $('.'+first).text(sign);
            $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
            $('.result').text('Ви програли :(');
            $('.MAIN_DIV .div').unbind('click');
            compScore++;
            Score();
            exit_flag = true;
        }    
    }
}
 
//Определяем ход компьютера
function check_2_user(sign){

    for (var i = 0; i < 8; i++) {
     
        var first = 'kletka' + win_user_array[i].substr(0,1);
        var second = 'kletka' + win_user_array[i].substr(1,1);
        var third = 'kletka' + win_user_array[i].substr(2,1);

         
        if( exit_flag == false ){
            if( $('.'+first).text() == sign && $('.'+second).text() == sign && $('.'+third).text() == '' ){
                $('.'+third).text(compSign);
                exit_flag = true;
            }
        }
                     
        if( exit_flag == false ){
            if( $('.'+first).text() == sign && $('.'+second).text() == '' && $('.'+third).text() == sign ){
                $('.'+second).text(compSign);
                exit_flag = true;
            }    
        }    
         
        if( $('.'+first).text() == '' && $('.'+second).text() == sign && $('.'+third).text() == sign ){
            $('.'+first).text(compSign);
            exit_flag = true;
        }
        if(exit_flag) break;
    }
}
 
$('.MAIN_DIV .div').click(function(){
    //Если клетка пустая
    if( $(this).text() == '' ){
        $(this).text(playerSign); 
        CHECK();   
        check_3_user(playerSign);
        check_2_comp(compSign);
        check_2_user(playerSign);  
        if( exit_flag == false ){
            for (var i = 1; i < 10; i++) {    
                if( $('.kletka'+i).text() == '' ){
                    $('.kletka'+i).text(compSign);
                    break;
                }
            }
        }else exit_flag = false;
    }
});

function CHECK() {
    if ($('.kletka1').text() != '' && $('.kletka2').text() != '' && $('.kletka3').text() != '' && $('.kletka4').text() != '' && $('.kletka5').text() != '' && $('.kletka6').text() != '' && $('.kletka7').text() != '' && $('.kletka8').text() != '' && $('.kletka9').text() != ''){
        $('.result').text("Ничья"); 
        $('.kletka1, .kletka2, .kletka3, .kletka4, .kletka5, .kletka6, .kletka7, .kletka8, .kletka9').css("background-color", "#FFE097");  
    }
}

function O(){
    playerSign = "O";
    compSign = "X";
    $('#B2').css("background-color", "lime"); 
    $('#B1').css("background-color", "white"); 
}

function X(){
    playerSign = "X";
    compSign = "O";
    $('#B1').css("background-color", "lime"); 
    $('#B2').css("background-color", "white"); 
}

function Score(){
    $('.score').text(userScore + " : " + compScore); 
}