var arr_elem = ["path3013", "path3023", "path3033", "path3035", "path3049", "path3053", "path3055", "path3069", "path3119", "path3129", "path3139", "path3141", "path3143", "path3145", "path3147", "path3149", "path3151", "path3153", "path3155", "path3157", "path3159", "path3161", "path3163"]; //массив активных элементов
$(window).on('load', function(){ 
var object = document.getElementById("svg-map");
var svgDocument = object.contentDocument;
var path_elem = svgDocument.getElementsByTagName("path");
var end_elem;
var flag; //объект выделен
var clck; //выбранный объект



var status = ["path3013", "path3153", "path3155"];   //статус района


/*********************подсветка в списке*******************/
function choice_spisok(el_id, col)     //(id эл-та, цвет)
{
	var elem = document.getElementById(el_id);
	elem.style.transition = "all 0.4s linear 0s";
	elem.style.background = col;


	var el2 = svgDocument.getElementById(el_id);
	el2.style.transition = "all 0.4s linear 0s";
	el2.style.background = col;
}

/****************************************************/

/************Изменить заголовок райна*****************/
function change_raion(el_id)
{
	var txt = $("#" + el_id).text();  //название района
	$("#zagl_info").html(txt);
}
/****************************************************/


/*************************Выбор в списке******************************************/
 $(".rn").hover(function(e){ //попадание на элемент
 	end_elem = $(e.target).attr("id");
 	
 		flag = true;
 		if($.inArray($(e.target).attr("id"), status) >= 0)
 		{
 			choice_spisok($(e.target).attr("id"), "red");
 			$(svgDocument.getElementById($(e.target).attr("id"))).css("fill", "red");
 		}
 		else
 		{
 			choice_spisok($(e.target).attr("id"), "green");
 			$(svgDocument.getElementById($(e.target).attr("id"))).css("fill", "green");
 		}
 	
 	

	    }, function(){ //выход из элемента
	    

 		if(flag == true)
 		{
 			if(end_elem != clck)
 			{
	  	  choice_spisok(end_elem, "white");
 		  $(svgDocument.getElementById(end_elem)).css("fill", "#fefee9");
	  	  flag = false;
	  	}
		}

	  });
 /********************************************************************************/




/*************************Выбор на карте******************************************/
 $(path_elem).hover(function(e){ //попадание на элемент
	   



 	if($.inArray($(e.target).attr("id"), arr_elem) >= 0)  //если элемент входит в массив
 	{
 		 	end_elem = svgDocument.getElementById($(e.target).attr("id"));
 			end_el_choice = $(e.target).attr("id");
 	
 		flag = true;
 		if($.inArray($(e.target).attr("id"), status) >= 0)
 		{
 			$(svgDocument.getElementById($(e.target).attr("id"))).css("fill", "red");
                                    
 			choice_spisok($(e.target).attr("id"), "red");


 		}
 		else
 		{
 			$(svgDocument.getElementById($(e.target).attr("id"))).css("fill", "green");
 			choice_spisok($(e.target).attr("id"), "green");
 		}
 	}
	    }, function(){ //выход из элемента
	    

 		if(flag == true)
 		{
 			if($(end_elem).attr("id") != clck)
 			{
 				
	  		 $(end_elem).css("fill", "#fefee9");
	  		 choice_spisok(end_el_choice, "white");
	  	 	flag = false;

	  	}
		}

	  });
 /********************************************************************************/

  /*************************Клик по списку******************************************/
 $(".rn").click(function() {
 	if(clck)
 	{
 		$(svgDocument.getElementById(clck)).css("fill", "#fefee9");
 		choice_spisok(clck, "white");
 	}
 	clck = $(this).attr("id");
 		if($.inArray($(this).attr("id"), status) >= 0)
 		{
 			$(svgDocument.getElementById($(this).attr("id"))).css("fill", "red");
 		}
 		else
 		{
 			$(svgDocument.getElementById($(this).attr("id"))).css("fill", "green");
 		}
 	change_raion(clck);
 	

	    });
 /*********************************************************************************/

 /*************************Клик по карте******************************************/
 $(path_elem).click(function() {
 	if($.inArray($(this).attr("id"), arr_elem) >= 0)
 	{
 	if(clck)
 	{
 		 $(svgDocument.getElementById(clck)).css("fill", "#fefee9");
	  	 choice_spisok(clck, "white");
 	}
 	clck = $(this).attr("id");
 		if($.inArray($(this).attr("id"), status) >= 0)
 		{
 			$(svgDocument.getElementById($(this).attr("id"))).css("fill", "red");
 		}
 		else
 		{
 			$(svgDocument.getElementById($(this).attr("id"))).css("fill", "green");
 			
 		}
 	}
 	change_raion(clck);

	    });
 /********************************************************************************/


 /*****************высота прокрутки и правого блока******************************/
 var map_height = $(map).height();
 $(vertical_menu).height(map_height - $(zagl).height() - 40);    //высота карты - заголовок - margin
 $(info).height($(map).height());
 /***************************************************************/

});