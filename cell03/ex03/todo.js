let todoList = document.getElementById("ft_list");
let x = document.cookie;

// เช็คว่ามี cookie อยู่ไหม
if (x.length > 0) {
	x = x.split(";");
	x.forEach((txt) => {
		CreatNewList(txt.split("=")[0], txt.split("=")[1]);
	});
}

function newButton() {
    let ListValue = prompt("Plese enter to do list");

	// ต้องกรอกค่าเข้ามา
    if (ListValue.charAt(0) != '') {
		let d = new Date();
		dat = d.setTime(d.getTime());
		document.cookie = dat + "=" + ListValue + ";";
		CreatNewList(dat, ListValue);
	}
}

function CreatNewList(dat, txt) {
	const CreatNew = document.createElement("button");
	CreatNew.type = "button";
	CreatNew.innerHTML = txt;
	CreatNew.addEventListener('click', ()=>{
		if (confirm("Click OK to delete") == true) {
			CreatNew.remove();
			// delete cookie
			document.cookie = dat + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
		}
	});
	// put to top
	todoList.prepend(CreatNew);
}