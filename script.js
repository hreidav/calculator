var var1="", var2="", number1="", number2="", operation="";
	
	function func_var_1(number1){
		if (var1.length<16){
		var1=document.getElementById("displ2").innerHTML+number1;
		document.getElementById("displ2").innerHTML=var1;
		number1="";
							}
								}
	function func_var_2(number2){
		if (var2.length<16){
		var2=document.getElementById("displ2").innerHTML+number2;
		document.getElementById("displ2").innerHTML=var2;
		number2="";
							}
								}
	function func_var7(){
		if (var1==""){var1=document.getElementById("displ2").innerHTML="7";}
		else if (operation==""){func_var_1(7);}
		else if (var2==""){var2=document.getElementById("displ2").innerHTML="7";}
		else {func_var_2(7);}
	}
	
	function func_var8(){
		if (var1==""){var1=document.getElementById("displ2").innerHTML="8";}
		else if (operation==""){func_var_1(8);}
		else if (var2==""){var2=document.getElementById("displ2").innerHTML="8";}
		else {func_var_2(8);}
	}
	function func_var9(){
		if (var1==""){var1=document.getElementById("displ2").innerHTML="9";}
		else if (operation==""){func_var_1(9);}
		else if (var2==""){var2=document.getElementById("displ2").innerHTML="9";}
		else {func_var_2(9);}
	}

	function func_var4(){
		if (var1==""){var1=document.getElementById("displ2").innerHTML="4";}
		else if (operation==""){func_var_1(4);}
		else if (var2==""){var2=document.getElementById("displ2").innerHTML="4";}
		else {func_var_2(4);}
	}		
	function func_var5(){
		if (var1==""){var1=document.getElementById("displ2").innerHTML="5";}
		else if (operation==""){func_var_1(5);}
		else if (var2==""){var2=document.getElementById("displ2").innerHTML="5";}
		else {func_var_2(5);}
	}
	function func_var6(){
		if (var1==""){var1=document.getElementById("displ2").innerHTML="6";}
		else if (operation==""){func_var_1(6);}
		else if (var2==""){var2=document.getElementById("displ2").innerHTML="6";}
		else {func_var_2(6);}
	}
	function func_var1(){
		if (var1==""){var1=document.getElementById("displ2").innerHTML="1";}
		else if (operation==""){func_var_1(1);}
		else if (var2==""){var2=document.getElementById("displ2").innerHTML="1";}
		else {func_var_2(1);}
						}
	function func_var2(){
		if (var1==""){var1=document.getElementById("displ2").innerHTML="2";}
		else if (operation==""){func_var_1(2);}
		else if (var2==""){var2=document.getElementById("displ2").innerHTML="2";}
		else {func_var_2(2);}
						}
	function func_var3(){
		if (var1==""){var1=document.getElementById("displ2").innerHTML="3";}
		else if (operation==""){func_var_1(3);}
		else if (var2==""){var2=document.getElementById("displ2").innerHTML="3";}
		else {func_var_2(3);}
						}
	function func_var0(){
		if (var1==""){var1=document.getElementById("displ2").innerHTML="0";}
		else if (operation==""){func_var_1(0);}
		else if (var2==""){var2=document.getElementById("displ2").innerHTML="0";}
		else {func_var_2(0);}
						}
		
		function func_coma(){
			
			var k=0, k1=0;
			for (i=0;i<var1.toString().length;i++){if(var1.toString().substr(i,1)=="."){k=k+1;};
													};
			if(k=="0") /*add coma to var1*/
				{var1=document.getElementById("displ2").innerHTML+".";
				document.getElementById("displ2").innerHTML=var1;}

						
			for (i=0;i<var2.toString().length;i++){if(var2.toString().substr(i,1)=="."){k1=k1+1;};
													};
			if(k1=="0"&&operation!="") /*add coma to var2*/
				{var2=document.getElementById("displ2").innerHTML+".";
				document.getElementById("displ2").innerHTML=var2;}

			/*	{if (var2==""){var2=document.getElementById("displ2").innerHTML="0.";alert(k1);}
					else {func_var_2(".");}*/
						/*};*/

							 } /*closing func_coma*/



	function func_operation_plus(){
		if (operation=="") {
		document.getElementById("displ1").innerHTML=document.getElementById("displ2").innerHTML+"+";
		document.getElementById("displ2").innerHTML="";
		operation="+";
							}
		if(document.getElementById("displ2").innerHTML!=""){func_rez();};
									}

	function func_operation_minus(){
		if (operation=="") {
		document.getElementById("displ1").innerHTML=document.getElementById("displ2").innerHTML+"-";
		document.getElementById("displ2").innerHTML="";
		operation="-";
							}
									}

	function func_operation_multiple(){
		if (operation=="") {
		document.getElementById("displ1").innerHTML=document.getElementById("displ2").innerHTML+"*";
		document.getElementById("displ2").innerHTML="";
		operation="*";
							}
										}

	function func_operation_divide(){
		if (operation=="") {
		document.getElementById("displ1").innerHTML=document.getElementById("displ2").innerHTML+"/";
		document.getElementById("displ2").innerHTML="";}
		operation="/";
									}

	function func_sqr(){
		if (document.getElementById("displ1").innerHTML==""){
															var1=Math.sqrt(parseFloat(document.getElementById("displ2").innerHTML));
															document.getElementById("displ2").innerHTML=var1;
															}
						}

	function func_pow(){
		if (document.getElementById("displ1").innerHTML==""){
															var1=Math.pow(parseFloat(document.getElementById("displ2").innerHTML),2);
															document.getElementById("displ2").innerHTML=var1;
															}
						}

	function func_rez(){
		if (operation=="+")	{document.getElementById("displ2").innerHTML=parseFloat(document.getElementById("displ1").innerHTML)+parseFloat(document.getElementById("displ2").innerHTML);
							document.getElementById("displ1").innerHTML="";
						var2=""; operation="";}
		if (operation=="-")	{document.getElementById("displ2").innerHTML=parseFloat(document.getElementById("displ1").innerHTML)-parseFloat(document.getElementById("displ2").innerHTML);
							document.getElementById("displ1").innerHTML="";
						var2=""; operation="";}
		if (operation=="*")	{document.getElementById("displ2").innerHTML=parseFloat(document.getElementById("displ1").innerHTML)*parseFloat(document.getElementById("displ2").innerHTML);
							document.getElementById("displ1").innerHTML="";
						var2=""; operation="";}
		if (operation=="/")	{
							if(var2=="0"){document.getElementById("displ2").innerHTML="I can't divide to zero!";document.getElementById("displ1").innerHTML="";var1="";var2=""; operation="";}
							else
							{document.getElementById("displ2").innerHTML=parseFloat(document.getElementById("displ1").innerHTML)/parseFloat(document.getElementById("displ2").innerHTML);
							document.getElementById("displ1").innerHTML="";
							var2="";
							operation="";
							}
							}
		
		var k=0; var k1=0;																		
						} /*closing func_rez*/
	
	function func_del(){
		var1="";var2="";operation="";
		var k=0; var k1=0;
		document.getElementById("displ1").innerHTML="";
		document.getElementById("displ2").innerHTML="0";
						} /*closing func_del*/
	function func_plus_minus()
	{alert("I'm sorry, but it's still not working")}
