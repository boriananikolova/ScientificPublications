// This javascript document is created by WebMaster Ltd. Exclusively for Bylgarski Zakonnik Ltd.
// Copyright! 2008. All Rights Reserved.
// If you are reading this be warned!!!
// This is a copyrighted document and no part of it can be used without
// exclusive written permission from WebMaster Ltd., Bulgaria, or Bylgarski Zakonnik Ltd., Bulgaria
// Last modified 15 January 2008

function makeNum(s)
{
	result = s.replace(",", ".");
	
	result2 = result;
	do
	{
		result = result2;
		result2 = result.replace(" ", "");
	}
	while (result2 != result);

	return result;
}

function sumPercet7()
{
	var i, sm, st;
	sm = new Number(0);
	for (i=1; i <= 6; i++)
	{
		if (i != 5)
		{
			st = new Number(makeNum(document.getElementById('c7'+i).innerHTML));
		}
		else
		{
			st = new Number(makeNum(document.getElementById('c7'+i).options[document.getElementById('c7'+i).selectedIndex].value));
		}
		sm += st;
	}
	document.getElementById('c77').innerHTML = sm.toFixed(2);
}

function change7PercentBefore()
{
	document.getElementById('c71').innerHTML = '9.90';
	document.getElementById('c72').innerHTML = '2.10';
	document.getElementById('c73').innerHTML = '0.60';
	document.getElementById('c74').innerHTML = '0.00';
	document.getElementById('c76').innerHTML = '4.80';
	document.getElementById('c77').innerHTML = '17.80';
}

function change7PercentAfter()
{
	document.getElementById('c71').innerHTML = '7.10';
	document.getElementById('c72').innerHTML = '2.10';
	document.getElementById('c73').innerHTML = '0.60';
	document.getElementById('c74').innerHTML = '2.80';
	document.getElementById('c76').innerHTML = '4.80';
	document.getElementById('c77').innerHTML = '17.80';
}

function changePercentBefore()
{
	document.getElementById('pc1').innerHTML = '7.90';
	document.getElementById('pc2').innerHTML = '1.40';
	document.getElementById('pc3').innerHTML = '0.40';
	document.getElementById('pc4').innerHTML = '0.00';
	document.getElementById('pc5').innerHTML = '3.20';
	document.getElementById('pc6').innerHTML = '12.90';
}

function changePercentAfter()
{
	document.getElementById('pc1').innerHTML = '5.70';
	document.getElementById('pc2').innerHTML = '1.40';
	document.getElementById('pc3').innerHTML = '0.40';
	document.getElementById('pc4').innerHTML = '2.20';
	document.getElementById('pc5').innerHTML = '3.20';
	document.getElementById('pc6').innerHTML = '12.90';
}

function whichCalcChanged()
{
	hideAll();

	var whichCalcList = document.getElementById('whichcalc');
	var whichCalc = whichCalcList.options[whichCalcList.selectedIndex].value;
	document.getElementById('calc' + whichCalc).style.display = '';
	
	switch (whichCalc)
	{
		case '9':
		{
			initCalc9();
			break;
		}
	
		case '12':
			window.open('izplateni-sumi.html', 'izplateni-sumi', 'width=735,height=600,scrollbars=yes');
			break;
	}
}

function hideAll()
{
	for (i=1; i<=13; i++)
		if (document.getElementById('calc'+i))
			document.getElementById('calc'+i).style.display='none';
}

function setCarAgeRange(carYear, curYear)
{
	var carYear = new Number(makeNum(carYear).substring(0,4));
	var curYear = new Number(curYear);
	var dblT = new Number(curYear - carYear) + 1;
	var dd = document.getElementById('carAgeRange');
	
	if (dblT < 1)
		return false;
	
	if (dblT > 14)
		dd.selectedIndex = 0;
	else if (dblT > 5)
		dd.selectedIndex = 1;
}

function ks2kw(ksval)
{
	var t = new Number(makeNum(ksval));
	t = new Number(t / 1.35962173);
	return t.toFixed(2);
}

function kw2ks(kwval)
{
	var t = new Number(makeNum(kwval));
	t = new Number(t * 1.35962173);
	return t.toFixed(2);
}

function calctax8()
{
	var dblAge = new Number(makeNum(document.getElementById('carAgeRange').options[document.getElementById('carAgeRange').selectedIndex].value));
	if (isNaN(dblAge) || dblAge == 'undefined' || dblAge == '' || dblAge == null)
		dblAge = new Number(0);
	
	var dblKw = new Number(makeNum(document.getElementById('carPowerKW').value));
	if (isNaN(dblKw) || dblKw == 'undefined' || dblKw == '' || dblKw == null)
		dblKw = new Number(0);

	var dblPPKw = new Number(makeNum(document.getElementById('carPowerKS').value));
	if (isNaN(dblPPKw) || dblPPKw == 'undefined' || dblPPKw == '' || dblPPKw == null)
		dblPPKw = new Number(0);

	var yM = new Number(makeNum(document.getElementById('yearMade').value));
	if (isNaN(yM) || yM == 'undefined' || yM == '' || yM == null)
		yM = new Number(0);

	if (dblKw == 0 && dblPPKw == 0)
		return false;
	
	dblAge = new Number(dblAge / 10);
	var taxPay = 0.0
	
    if (dblKw <= 37)
        dblPPKw = 0.34;
    else if (dblKw <= 55)
        dblPPKw = 0.4;
    else if (dblKw <= 74)
        dblPPKw = 0.54;
    else if (dblKw <= 110)
        dblPPKw = 1.1;
    else
        dblPPKw = 1.23;
   
   taxPay = new Number(dblKw * dblPPKw);
   taxPay = new Number(taxPay * dblAge);
   
   if (document.getElementById('catal').checked == true)
        taxPay = new Number(taxPay * 0.5);
	document.getElementById('c8res').innerHTML=taxPay.toFixed(2);
}

function calctax7()
{
	//var taxPay = new Number(makeNum(document.getElementById('pay7').value));
	var taxPay = new Number(makeNum(document.getElementById('pay1').value));
	if (isNaN(taxPay) || taxPay == 'undefined' || taxPay == '' || taxPay == null)
		taxPay = 0.0;
	
	var dblPay, dblT, i, dT, tPerc, tD;

	sumPercet7();

	dblPay = ((taxPay > 2600)?(2600):(taxPay));
	dblT = new Number(0);

	tD = new Number(makeNum(document.getElementById('c75').options[document.getElementById('c75').selectedIndex].value));
	tD *= dblPay;
	tD = new Number(tD / 100);
	tD = new Number(tD.toFixed(2));
	document.getElementById('rv75').innerHTML = tD.toFixed(2);
	dblT = new Number(dblT + tD);

	for (i=1; i <= 6; i++)
	{
		if (i != 5)
		{
			tD = new Number(makeNum(document.getElementById('c7'+i).innerHTML));
			tD *= dblPay;
			tD = new Number(tD / 100);
			tD = new Number(tD.toFixed(2));
			document.getElementById('rv7'+i).innerHTML = tD.toFixed(2);
			dblT = new Number(dblT + tD);
		}
	}
	dblT = new Number(dblT.toFixed(2));
	document.getElementById('rv77').innerHTML = dblT.toFixed(2);
	document.getElementById('rv7net').innerHTML = dblT.toFixed(2);
	document.getElementById('rv16net').innerHTML = (taxPay+dblT).toFixed(2);
}

function calctax5()
{
	var taxPay = new Number(makeNum(document.getElementById('pay5').value));
	if (isNaN(taxPay) || taxPay == 'undefined' || taxPay == '' || taxPay == null)
		taxPay = new Number(0);
	
	var dblDays = new Number(makeNum(document.getElementById('slojnaPeriodi').value));
	if (isNaN(dblDays) || dblDays == 'undefined' || dblDays == '' || dblDays == null)
		dblDays = new Number(0);

	var dblInterest = new Number(makeNum(document.getElementById('slojnaPercent').value));
	if (isNaN(dblInterest) || dblInterest == 'undefined' || dblInterest == '' || dblInterest == null)
		dblInterest = new Number(0);
	
	taxPay = new Number(taxPay.toFixed(2));
	
	var dblT = new Number(1 + (dblInterest / 100));
	var i;
	
	for (i = 2; i <= dblDays; i++)
		dblT = new Number(dblT * (1 + (dblInterest / 100)));
	dblT = new Number(taxPay * dblT);
	document.getElementById('c5res').innerHTML=dblT.toFixed(2);
	dblT = new Number(dblT - taxPay);
	document.getElementById('c5int').innerHTML=dblT.toFixed(2);
}

function calctax4()
{
	var taxPay = new Number(makeNum(document.getElementById('pay4').value));
	if (isNaN(taxPay) || taxPay == 'undefined' || taxPay == '' || taxPay == null)
		taxPay = new Number(0);
	
	var dblDays = new Number(makeNum(document.getElementById('txtDays').value));
	if (isNaN(dblDays) || dblDays == 'undefined' || dblDays == '' || dblDays == null)
		dblDays = new Number(0);

	var dblInterest = new Number(makeNum(document.getElementById('txtYPercent').value));
	if (isNaN(dblInterest) || dblInterest == 'undefined' || dblInterest == '' || dblInterest == null)
		dblInterest = new Number(0);
	
	taxPay = new Number(taxPay.toFixed(2));
	
	var dblT = new Number(dblInterest * taxPay * (dblDays / 360) / 100);
	dblT = new Number(dblT.toFixed(2));
	document.getElementById('c4int').innerHTML=dblT.toFixed(2);
	dblT += taxPay;
	dblT = new Number(dblT.toFixed(2));
	document.getElementById('c4res').innerHTML=dblT.toFixed(2);
}

function calctax2()
{
	var taxPay = new Number(makeNum(document.getElementById('pay2').value));
	if (isNaN(taxPay) || taxPay == 'undefined' || taxPay == '' || taxPay == null)
		taxPay = new Number(0);
	
	var dblT;
	
    dblT = new Number(taxPay.toFixed(2));
	
	// 2009
	dblT = new Number(dblT * 0.1);
	/*
    if (dblT <= 2400)
        dblT = new Number(0);
    else if (dblT > 2400 && dblT <= 3000)
        dblT = new Number((dblT - 2400) / 100 * 20, 2);
    else if (dblT > 3000 && dblT <= 7200)
        dblT = new Number(120 + (dblT - 3000) / 100 * 22, 2);
    else
        dblT = new Number(1044 + (dblT - 7200) / 100 * 24, 2);
*/
	document.getElementById('c2res').innerHTML = dblT.toFixed(2);
}

function calctax1()
{
	var taxPay = new Number(makeNum(document.getElementById('pay1').value));
	if (isNaN(taxPay) || taxPay == 'undefined' || taxPay == '' || taxPay == null)
		taxPay = 0.0;
	
	var dblPay, dblT, i, dT, dPerc;
	dblPay = ((taxPay > 2600)?(2600):(taxPay));
	dblT = new Number(0);
	dPerc = new Number(0);
	
	for (i=1; i<6; i++)
	{
		var u,k,t;
		u = document.getElementById('rab'+i);
		k = document.getElementById('pc'+i);
		dT = new Number(makeNum(k.innerHTML) / 100 * dblPay);
		u.innerHTML= dT.toFixed(2);
		dblT += new Number(dT.toFixed(2));
		t = new Number(k.innerHTML);
		dPerc = new Number(t.valueOf()+dPerc.valueOf());
	}
		
	document.getElementById('rab6').innerHTML=dblT.toFixed(2);
	document.getElementById('rabsl').innerHTML=dblT.toFixed(2);
	
	document.getElementById('pc6').innerHTML=dPerc.toFixed(2);
	
	dT = new Number(calcAvansov1_2008(taxPay - dblT.toFixed(2)));
	document.getElementById('rabad').innerHTML = dT.toFixed(2);
	dT = new Number(taxPay - dT - dblT);
	//document.getElementById('rabnet').innerHTML = dT.toFixed(2);
	document.getElementById('payNet').value = dT.toFixed(2);
}

function calcAvansov1(dblAmount)
{
	var dblT = new Number(0);
	if (dblAmount <= 200)
	{
        dblT = new Number(0);
	}
    else if (dblAmount > 200 && dblAmount <= 250)
	{
		dblT = new Number((dblAmount - 200) / 100 * 20);
	}
    else if (dblAmount > 250 && dblAmount <= 600)
	{
		dblT = new Number(10 + (dblAmount - 250) / 100 * 22);
	}
    else
	{
		dblT = new Number(87 + (dblAmount - 600) / 100 * 24);
	}
	
	return dblT.toFixed(2);
}

function calcAvansov1_2008(dblAmount)
{
	dblResult = new Number(dblAmount * 0.1);
	
	return dblResult.toFixed(2);
}

function initCalc9()
{
	updateCalc9ContentVisibility();
	calctax9();
}

function calc9whichChanged()
{
	updateCalc9ContentVisibility();
	calctax9();
}

function calc9ProdajbaDsGradChanged()
{
	calctax9();
}

function calc9DarenieDsLiniaChanged()
{
	calctax9();
}

function updateCalc9ContentVisibility()
{
	var calcWhat = document.getElementById('calc9which').value;

	document.getElementById('ctrc9PoNotAkt').style.display =
		(calcWhat != '6') ? '' : 'none';

	switch (calcWhat)
	{
		case '2':
		case '3':
		case '4':
		{
			document.getElementById('ctrMin1001').style.display = '';
			document.getElementById('ctrMin101').style.display = 'none';
			break;
		}

		case '6':
		{
			document.getElementById('ctrMin1001').style.display = 'none';
			document.getElementById('ctrMin101').style.display = '';
			break;
		}
		
		default:
		{
			document.getElementById('ctrMin1001').style.display = 'none';
			document.getElementById('ctrMin101').style.display = 'none';
			break;
		}
	}

	switch (calcWhat)
	{
		case '1':
		case '5':
		{
			document.getElementById('ctrc9DanychnaSlujba').style.display = '';
			document.getElementById('ctrc9AgenciyaPoVpisvaniya').style.display = '';
			break;
		}

		case '2':
		case '3':
		case '4':
		{
			document.getElementById('ctrc9DanychnaSlujba').style.display = 'none';
			document.getElementById('ctrc9AgenciyaPoVpisvaniya').style.display = '';
			break;
		}

		case '6':
		{
			document.getElementById('ctrc9DanychnaSlujba').style.display = '';
			document.getElementById('ctrc9AgenciyaPoVpisvaniya').style.display = 'none';
			break;
		}
	}

	document.getElementById('ctrc9DanuchnaSlujbaProdajbaGrad').style.display =
		(calcWhat == '1') ? '' : 'none';

	document.getElementById('ctrc9DanuchnaSlujbaDarenieLiniya').style.display =
		(calcWhat == '5') ? '' : 'none';
}

function calctax9()
{
	var c9DanychnaSlujba = null;
	var c9AgenciyaPoVpisvaniya = null;
	var c9NotarialnaTaksa = null;
	var c9DDS = null;
	var c9ObshtoTaksi = null;
	
	var c9DanychnaSlujbaErrorText = 'n/a';
	var c9AgenciyaPoVpisvaniyaErrorText = 'n/a';
	var c9NotarialnaTaksaErrorText = 'n/a';
	var c9DDSErrorText = 'n/a';
	var c9ObshtoTaksiErrorText = 'n/a';
	
	var taxPay = parseFloat(makeNum(document.getElementById('pay9').value));
	if (!(isNaN(taxPay) || taxPay == 'undefined' || taxPay == null || taxPay < 0))
	{
		taxPay = parseInt(taxPay);
		var calcWhat = document.getElementById('calc9which').value;
		switch (calcWhat)
		{
			case '1':
			{
				if (document.getElementById('calc9ProdajbaDsGrad').value == '')
					c9DanychnaSlujbaErrorText = "(изберете град)";
				else
				{
					var percDanychnaSlujba = new Number(makeNum(document.getElementById('calc9ProdajbaDsGrad').value));
					c9DanychnaSlujba = taxPay * percDanychnaSlujba / 100;
					c9DanychnaSlujba = new Number(c9DanychnaSlujba.toFixed(2));
				}
				
				c9AgenciyaPoVpisvaniya = taxPay / 1000;
				c9AgenciyaPoVpisvaniya = new Number(c9AgenciyaPoVpisvaniya.toFixed(2));
				if (c9AgenciyaPoVpisvaniya < 10)
					c9AgenciyaPoVpisvaniya = 10;
				
				if (taxPay < 1001)
					c9NotarialnaTaksa = 30;
				else if (taxPay < 10001)
					c9NotarialnaTaksa = (taxPay - 1000) * 1.3 / 100 + 43.5;
				else if (taxPay < 50001)
					c9NotarialnaTaksa = (taxPay - 10000) * 0.8 / 100 + 160.5;
				else if (taxPay < 100001)
					c9NotarialnaTaksa = (taxPay - 50000) * 0.5 / 100 + 480.5;
				else if (taxPay < 500001)
					c9NotarialnaTaksa = (taxPay - 100000) * 0.2 / 100 + 730.5;
				else
					c9NotarialnaTaksa = (taxPay - 500000) * 0.1 / 100 + 1530.5;

				if (c9NotarialnaTaksa != null)
				{				
					c9NotarialnaTaksa = new Number(c9NotarialnaTaksa.toFixed(2));
					if (c9NotarialnaTaksa > 6000)
						c9NotarialnaTaksa = 6000;
				}

				if (c9NotarialnaTaksa != null)
				{				
					c9DDS = c9NotarialnaTaksa * 20 / 100;
					c9DDS = new Number(c9DDS.toFixed(2));
				}
				break;
			}

			case '2':
			{
				if (taxPay < 1001)
					break;
					
				c9AgenciyaPoVpisvaniya = taxPay / 1000;
				c9AgenciyaPoVpisvaniya = new Number(c9AgenciyaPoVpisvaniya.toFixed(2));
				if (c9AgenciyaPoVpisvaniya < 10)
					c9AgenciyaPoVpisvaniya = 10;
				
				if (taxPay < 1001)
					c9NotarialnaTaksa = c9NotarialnaTaksa;   // not applicable
				else if (taxPay < 10001)
					c9NotarialnaTaksa = (taxPay - 1000) * 1.3 / 100 + 43.5;
				else if (taxPay < 50001)
					c9NotarialnaTaksa = (taxPay - 10000) * 0.8 / 100 + 160.5;
				else if (taxPay < 100001)
					c9NotarialnaTaksa = (taxPay - 50000) * 0.5 / 100 + 480.5;
				else if (taxPay < 500001)
					c9NotarialnaTaksa = (taxPay - 100000) * 0.2 / 100 + 730.5;
				else
					c9NotarialnaTaksa = (taxPay - 500000) * 0.1 / 100 + 1530.5;

				if (c9NotarialnaTaksa != null)
				{				
					c9NotarialnaTaksa = new Number(c9NotarialnaTaksa.toFixed(2));
					if (c9NotarialnaTaksa > 6000)
						c9NotarialnaTaksa = 6000;
				}
				
				if (c9NotarialnaTaksa != null)
				{				
					c9DDS = c9NotarialnaTaksa * 20 / 100;
					c9DDS = new Number(c9DDS.toFixed(2));
				}
				break;
			}

			case '3':
			{
				if (taxPay < 1001)
					break;
					
				c9AgenciyaPoVpisvaniya = taxPay / 1000;
				c9AgenciyaPoVpisvaniya = new Number(c9AgenciyaPoVpisvaniya.toFixed(2));
				if (c9AgenciyaPoVpisvaniya < 10)
					c9AgenciyaPoVpisvaniya = 10;
				
				if (taxPay < 1001)
					c9NotarialnaTaksa = c9NotarialnaTaksa;   // not applicable
				else if (taxPay < 10001)
					c9NotarialnaTaksa = ((taxPay - 1000) * 1.3 / 100 + 43.5) / 2;
				else if (taxPay < 50001)
					c9NotarialnaTaksa = ((taxPay - 10000) * 0.8 / 100 + 160.5) / 2;
				else if (taxPay < 100001)
					c9NotarialnaTaksa = ((taxPay - 50000) * 0.5 / 100 + 480.5) / 2;
				else if (taxPay < 500001)
					c9NotarialnaTaksa = ((taxPay - 100000) * 0.2 / 100 + 730.5) / 2;
				else
					c9NotarialnaTaksa = ((taxPay - 500000) * 0.1 / 100 + 1530.5) / 2;

				if (c9NotarialnaTaksa != null)
				{				
					c9NotarialnaTaksa = new Number(c9NotarialnaTaksa.toFixed(2));
					if (c9NotarialnaTaksa < 30)
						c9NotarialnaTaksa = 30;
					if (c9NotarialnaTaksa > 3000)
						c9NotarialnaTaksa = 3000;
				}
				
				if (c9NotarialnaTaksa != null)
				{				
					c9DDS = c9NotarialnaTaksa * 20 / 100;
					c9DDS = new Number(c9DDS.toFixed(2));
				}
				break;
			}

			case '4':
			{
				if (taxPay < 1001)
					break;
					
				c9AgenciyaPoVpisvaniya = taxPay / 2000;
				c9AgenciyaPoVpisvaniya = new Number(c9AgenciyaPoVpisvaniya.toFixed(2));
				if (c9AgenciyaPoVpisvaniya < 10)
					c9AgenciyaPoVpisvaniya = 10;
				
				if (taxPay < 1001)
					c9NotarialnaTaksa = c9NotarialnaTaksa;   // not applicable
				else if (taxPay < 10001)
					c9NotarialnaTaksa = 25;
				else if (taxPay < 50001)
					c9NotarialnaTaksa = ((taxPay - 10000) * 0.8 / 100 + 160.5) * 15 / 100;
				else if (taxPay < 100001)
					c9NotarialnaTaksa = ((taxPay - 50000) * 0.5 / 100 + 480.5) * 15 / 100;
				else if (taxPay < 500001)
					c9NotarialnaTaksa = ((taxPay - 100000) * 0.2 / 100 + 730.5) * 15 / 100;
				else
					c9NotarialnaTaksa = ((taxPay - 500000) * 0.1 / 100 + 1530.5) * 15 / 100;

				if (c9NotarialnaTaksa != null)
				{				
					c9NotarialnaTaksa = new Number(c9NotarialnaTaksa.toFixed(2));
					if (c9NotarialnaTaksa < 25)
						c9NotarialnaTaksa = 25;
					if (c9NotarialnaTaksa > 900)
						c9NotarialnaTaksa = 900;
				}
				
				if (c9NotarialnaTaksa != null)
				{				
					c9DDS = c9NotarialnaTaksa * 20 / 100;
					c9DDS = new Number(c9DDS.toFixed(2));
				}
				break;
			}

			case '5':
			{
				if (document.getElementById('calc9DarenieDsLinia').value == '')
					c9DanychnaSlujbaErrorText = "(изберете роднинство)";
				else
				{				
					var percDanychnaSlujba = new Number(makeNum(document.getElementById('calc9DarenieDsLinia').value));
					c9DanychnaSlujba = taxPay * percDanychnaSlujba / 100;
					c9DanychnaSlujba = new Number(c9DanychnaSlujba.toFixed(2));
				}
				
				c9AgenciyaPoVpisvaniya = taxPay / 1000;
				c9AgenciyaPoVpisvaniya = new Number(c9AgenciyaPoVpisvaniya.toFixed(2));
				if (c9AgenciyaPoVpisvaniya < 10)
					c9AgenciyaPoVpisvaniya = 10;

				if (taxPay < 1001)
					c9NotarialnaTaksa = 30;
				else if (taxPay < 10001)
					c9NotarialnaTaksa = (taxPay - 1000) * 1.3 / 100 + 43.5;
				else if (taxPay < 50001)
					c9NotarialnaTaksa = (taxPay - 10000) * 0.8 / 100 + 160.5;
				else if (taxPay < 100001)
					c9NotarialnaTaksa = (taxPay - 50000) * 0.5 / 100 + 480.5;
				else if (taxPay < 500001)
					c9NotarialnaTaksa = (taxPay - 100000) * 0.2 / 100 + 730.5;
				else
					c9NotarialnaTaksa = (taxPay - 500000) * 0.1 / 100 + 1530.5;

				if (c9NotarialnaTaksa != null)
				{				
					c9NotarialnaTaksa = new Number(c9NotarialnaTaksa.toFixed(2));
					if (c9NotarialnaTaksa > 6000)
						c9NotarialnaTaksa = 6000;
				}
				
				if (c9NotarialnaTaksa != null)
				{				
					c9DDS = c9NotarialnaTaksa * 20 / 100;
					c9DDS = new Number(c9DDS.toFixed(2));
				}
				break;
			}

			case '6':
			{
				if (taxPay < 101)
					break;
					
				c9DanychnaSlujba = taxPay * 2.5 / 100;
				c9DanychnaSlujba = new Number(c9DanychnaSlujba.toFixed(2));
				
				if (taxPay < 101)
					c9NotarialnaTaksa = c9NotarialnaTaksa;   // not applicable
				else if (taxPay < 1001)
					c9NotarialnaTaksa = (taxPay - 100) * 1.5 / 100 + 30;
				else if (taxPay < 10001)
					c9NotarialnaTaksa = (taxPay - 1000) * 1.3 / 100 + 43.5;
				else if (taxPay < 50001)
					c9NotarialnaTaksa = (taxPay - 10000) * 0.8 / 100 + 160.5;
				else if (taxPay < 100001)
					c9NotarialnaTaksa = (taxPay - 50000) * 0.5 / 100 + 480.5;
				else if (taxPay < 500001)
					c9NotarialnaTaksa = (taxPay - 100000) * 0.2 / 100 + 730.5;
				else
					c9NotarialnaTaksa = (taxPay - 500000) * 0.1 / 100 + 1530.5;

				if (c9NotarialnaTaksa != null)
				{				
					c9NotarialnaTaksa = new Number(c9NotarialnaTaksa.toFixed(2));
					if (c9NotarialnaTaksa > 6000)
						c9NotarialnaTaksa = 6000;
				}
				
				if (c9NotarialnaTaksa != null)
				{				
					c9DDS = c9NotarialnaTaksa * 20 / 100;
					c9DDS = new Number(c9DDS.toFixed(2));
				}
				break;
			}
		}
	}

	// calculate total taxes
	if (c9DanychnaSlujba != null)
	{
		if (c9ObshtoTaksi == null)
			c9ObshtoTaksi = c9DanychnaSlujba;
		else
			c9ObshtoTaksi += c9DanychnaSlujba;
	}

	if (c9AgenciyaPoVpisvaniya != null)
	{
		if (c9ObshtoTaksi == null)
			c9ObshtoTaksi = c9AgenciyaPoVpisvaniya;
		else
			c9ObshtoTaksi += c9AgenciyaPoVpisvaniya;
	}

	if (c9NotarialnaTaksa != null)
	{
		if (c9ObshtoTaksi == null)
			c9ObshtoTaksi = c9NotarialnaTaksa;
		else
			c9ObshtoTaksi += c9NotarialnaTaksa;
	}

	if (c9DDS != null)
	{
		if (c9ObshtoTaksi == null)
			c9ObshtoTaksi = c9DDS;
		else
			c9ObshtoTaksi += c9DDS;
	}

	// dislay taxes in the controls
	if (document.getElementById('ctrc9DanychnaSlujba').style.display != 'none')
	{
		document.getElementById('c9DanychnaSlujba').innerHTML =
			(c9DanychnaSlujba == null) ? c9DanychnaSlujbaErrorText : (c9DanychnaSlujba.toFixed(2) + ' лв.');
	}
		
	if (document.getElementById('ctrc9AgenciyaPoVpisvaniya').style.display != 'none')
	{
		document.getElementById('c9AgenciyaPoVpisvaniya').innerHTML =
			(c9AgenciyaPoVpisvaniya == null) ? c9AgenciyaPoVpisvaniyaErrorText : (c9AgenciyaPoVpisvaniya.toFixed(2) + ' лв.');
	}
		
	if (document.getElementById('ctrc9NotarialnaTaksa').style.display != 'none')
	{
		document.getElementById('c9NotarialnaTaksa').innerHTML =
			(c9NotarialnaTaksa == null) ? c9NotarialnaTaksaErrorText : (c9NotarialnaTaksa.toFixed(2) + ' лв.');
	}
		
	if (document.getElementById('ctrc9DDS').style.display != 'none')
	{
		document.getElementById('c9DDS').innerHTML =
			(c9DDS == null) ? c9DDSErrorText : (c9DDS.toFixed(2) + ' лв.');
	}
		
	if (document.getElementById('ctrc9ObshtoTaksi').style.display != 'none')
	{
		document.getElementById('c9ObshtoTaksi').innerHTML =
			(c9ObshtoTaksi == null) ? c9ObshtoTaksiErrorText : (c9ObshtoTaksi.toFixed(2) + ' лв.');
	}
}


/**
 * С помощта на този калкулатор може да се изчисли данъка, 
 * който предприятията (самоосигуряващите се лица) следва да удържат 
 * при изплащането на доходи от наем или от друго възмездно предоставяне 
 * за ползване на права или имущество.
 * Пресмята дохода Бруто - Нето и Нето - Бруто.
 * 
 * @returns {undefined}
 */
function calcRentIncome() {
	var percentExp = 0.1; // нормативно признати разходи - 10%
	var ctrAmount = new Number(makeNum(document.getElementById('c10ContractAmount').value));
	var isNeto = document.getElementById('c10BrutoNeto').value;
	
	if (isNaN(ctrAmount) || ctrAmount == 'undefined' || ctrAmount == '' || ctrAmount == null)
		ctrAmount = 0.0;
	
	if (isNeto == 1) {
		ctrAmount = ctrAmount / (1 - percentExp * (1 - percentExp));
	}

	var expenses = Math.round(ctrAmount * percentExp * 100) / 100;
	var oblSum = ctrAmount - expenses;
	var tax = oblSum * percentExp;
	var rcvAmount = ctrAmount - tax;
	
	document.getElementById('c10Expenses').innerHTML = expenses.toFixed(2) + ' лв.';
	document.getElementById('c10Tax').innerHTML = tax.toFixed(2) + ' лв.';
	document.getElementById('c10OblIncome').innerHTML = oblSum.toFixed(2) + ' лв.';
	document.getElementById('c10Amount').innerHTML = ctrAmount.toFixed(2) + ' лв.';
	document.getElementById('c10ReceiveAmount').innerHTML = rcvAmount.toFixed(2) + ' лв.';
	
	debugger;
}

/**
 * Калкулаторът изчислява размера на социалните и здравни осигурителни вноски 
 * на самоосигуряващо се лице. Пресмята общата сума на осигуровките на осигурени 
 * и неосигурени лица за общо заболяване и майчинство. 
 * 
 * @returns {undefined}
 */
function calcOsigorovki() {
	var income = new Number(makeNum(document.getElementById('c11Income').value));
	var birth = document.getElementById('c11Birth').value;
	var illness = document.getElementById('c11Illness').value;
	
	if (isNaN(income) || income == 'undefined' || income == '' || income == null)
		income = 460.0;
	
	if (income > 2600)
		income = 2600.0;
	
	var p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0;
	
	if (birth == 1 && illness == 1) {
		p2 = 12.8;
		p3 = 0;
		p4 = 5.0;
		p5 = 8.0;
	} else if (birth == 1 && illness == 0) {
		p2 = 12.8;
		p3 = 3.5;
		p4 = 5.0;
		p5 = 8.0;
	} else if (birth == 0 && illness == 0) {
		p2 = 17.8;
		p3 = 3.5;
		p4 = 0.0;
		p5 = 8.0;
	} else if (birth == 0 && illness == 1) {
		p2 = 17.8;
		p3 = 0.0;
		p4 = 0.0;
		p5 = 8.0;
	}

	p1 = p2 + p3 + p4 + p5;

	var l1c2 = income * (p1 / 100);
	var l2c2 = income * (p2 / 100);
	var l3c2 = income * (p3 / 100);
	var l4c2 = income * (p4 / 100);
	var l5c2 = income * (p5 / 100);

	document.getElementById('c11L0C2').innerHTML = income.toFixed(2) + ' лв.';

	document.getElementById('c11L1C1').innerHTML = p1.toFixed(2) + ' %';
	document.getElementById('c11L1C2').innerHTML = l1c2.toFixed(2) + ' лв.';

	document.getElementById('c11L2C1').innerHTML = p2.toFixed(2) + ' %';
	document.getElementById('c11L2C2').innerHTML = l2c2.toFixed(2) + ' лв.';

	document.getElementById('c11L3C1').innerHTML = p3.toFixed(2) + ' %';
	document.getElementById('c11L3C2').innerHTML = l3c2.toFixed(2) + ' лв.';

	document.getElementById('c11L4C1').innerHTML = p4.toFixed(2) + ' %';
	document.getElementById('c11L4C2').innerHTML = l4c2.toFixed(2) + ' лв.';

	document.getElementById('c11L5C1').innerHTML = p5.toFixed(2) + ' %';
	document.getElementById('c11L5C2').innerHTML = l5c2.toFixed(2) + ' лв.';
}

function calcTrudovStaj()
{
	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var firstDate = parseDate(document.getElementById('c13date1').value);
	var secondDate = parseDate(document.getElementById('c13date2').value);

	if (isNaN(firstDate) || isNaN(secondDate)) {
		return;
	}

	if (secondDate < firstDate) {
		var t = firstDate;
		firstDate = secondDate;
		secondDate = t;
	}
	
	var y1 = firstDate.getFullYear();
	var m1 = firstDate.getMonth() + 1;
	var d1 = firstDate.getDate();
	
	var y2 = secondDate.getFullYear();
	var m2 = secondDate.getMonth() + 1;
	var d2 = secondDate.getDate();

	var cyear2 = y2;
	var cyear1 = y1;

	var cmonth2 = m2;
	var cmonth1 = m1;

	var cday2 = d2;
	var cday1 = d1;

	var nday = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	if (1 == (cmonth1-1)) {
		nday[1] = (0 == cyear1 % 4) && (0 != cyear1 % 100) || (0 == cyear1 % 400) ? 29 : 28;
	}
	if (1 == (cmonth2-1)) {
		nday[1] = (0 == cyear2 % 4) && (0 != cyear2 % 100) || (0 == cyear2 % 400) ? 29 : 28;
	}

	var sday3 = cday2 - cday1;

	if (sday3 < 0) {
		sday3 = nday[cmonth1-1] - cday1 + cday2;
		cmonth2 = cmonth2 -1;
	}

	if (cmonth2 < 0) {
		cmonth2 = cmonth2 + 12;
		cyear2 = cyear2 -1;
	}

	var smonth3 = cmonth2 - cmonth1;
	if (smonth3 < 0) {
		smonth3 = smonth3 + 12;
		cyear2 = cyear2 -1;
	}
  
	var syear3 = 0;
	syear3 = cyear2 - cyear1;

    //var rjd1 = cal_to_jd( y2a, m2a, d2a )


    //if( er3b == 1 ) {y2b = -y2b + 1;}
    //var rjd2 = cal_to_jd( y2b, m2b, d2b )

	years = syear3;
	months = smonth3;
	days = sday3;

	
	/*var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	
	var years = Math.floor(diffDays / (30*12));
	diffDays %= (30*12);
	
	var months = Math.floor(diffDays / 30);
	diffDays %= 30;
	
	var days = diffDays;*/
	
	document.getElementById('c13staj').innerHTML = years + (years===1? ' година': ' години, ') + months + (months===1? ' месец, ' : ' месеца, ') + days + (days===1 ? ' ден' : ' дни');
}