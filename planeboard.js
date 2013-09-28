/*
	��������� ������� ����������� ����� JavaScript.
	������ ������, ������� ��� � ���� � ������ ��� ���������� ������ �������� ������/������� ������ ������.
	<tr class="oddTr">
		...
		<td class="oddTd">
			...
	����� �� ��������� ���� ��������� background � ���� �������. � ������, ��� ����� ������������ �������, ������� � ������ js.
	 
*/

function IndexOf(element)
{
	var index = 1;
	while(element.previousSibling)
	{
		element = element.previousSibling;
		if(element.nodeType === 1)
			++index;
	}
	return index;
}

//��������� ���� 'td' �� ������� planeBoard
function GetTdElementsFromPlaneBoard()
{
	return document.getElementById('planeBoard').getElementsByTagName('tbody')[0].getElementsByTagName('td');
}


function HighlightColumn()
{
	var column = IndexOf(this);
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = "#planeBoard tbody td:nth-of-type(" + column + ") { background: #87CEFA; }";
	document.body.appendChild(css);
}

function ResetHighlight()
{
	document.body.removeChild(document.body.lastChild);
}

function Init()
{
	var tds = GetTdElementsFromPlaneBoard();
	var length = tds.length;
	for(var i = 0; i < length; ++i)
	{
		var t = tds[i];
		t.onmouseover = HighlightColumn;
		t.onmouseout = ResetHighlight;
	}
}