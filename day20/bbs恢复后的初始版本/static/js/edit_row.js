status1 = [
	{'id':1, 'text': "����"},
	{'id':2, 'text': "����"}
];

business = [
	{'id':1,'text': "����"},
	{'id':2,'text': "�ܽ���"},
	{'id':3,'text': "����Ѹ"} 
];

//δ��ɰ汾
//function AddHost(mode,tb){
//	isEditMode = $(mode).hasClass('editing')
//	if(isEditMode) {
//		var cp = $(tb).children().first().clone()
//		$(tb).append(cp)
//	}else{
//		$(mode).addClass('editing')
//		$(mode).text('�˳��༭ģʽ')
//		var cp = $(tb).children().first().clone()
//		$(tb).append(cp)
//	}
//}

function Save(mode,tb) {
	host_arr = new Array()
	var isEditing = $(mode).hasClass('editing')
	if (isEditing) {
		$(tb).children().each(function () {
			var tr = $(this);
			var isChecked = $(this).find(':checkbox').prop('checked');
			if (isChecked == true) {

				tr.children().each(function(){
					//#��������Լ��ӱ�ǩ��ͨ��find���һ�ȡinput��ֵ����Ϊ�ܹ��滮�Ĳ���ȫ������
					//#�������ҵ��ɶȲ����ã�$(this).find(':input').val()���Ի�ȡIP��ַ��
					//#������Ҫ��jquery��ʹ�ã���ȡֵȻ���͵���̨����̨��ȡֵ��������������Ȼ��ռʱ����ҳ�ϡ�
					td = $(this).text()
					host_arr.push(td)


				})
			}
		})
	}
	console.log(host_arr)
		$.ajax({
		url:'/index/',
		type:'post',
		data:{h:host_arr[1],p:host_arr[2],s:host_arr[3],b:host_arr[4]},
		success:function(arg){
			}
		})
	window.location.href = window.location.href
}



function CheckAll(mode,tb){
	//1.ѡ��checkbox������Ѿ�����༭ģʽ����ѡ���н���༭ģʽ��
	$(tb).children().each(function(){
			//$(this)����ѭ��������,ÿһ��tr,ÿһ������
			//����Ҫʹ��forѭ����tr�ó�������Ϊ�кܶ��tr
			var tr=$(this);
			var isChecked = $(this).find(':checkbox').prop('checked');
			if(isChecked == true){
			}else{
				$(this).find(':checkbox').prop('checked',true);
				//����Ѿ�����༭ģʽ����ѡ���б�Ϊ�༭״̬
				var isEditMode = $(mode).hasClass('editing');
				if(isEditMode){
					RowIntoEditMode(tr)
				}
			}
	})
}


function CheckReverse(mode,tb){
	//�Ƿ����༭ģʽ
	isEditMode = $(mode).hasClass('editing');
	if(isEditMode){
		//��������tr
		$(tb).children().each(function(){
			var tr = $(this)
			var check_box = tr.children().first().find(':checkbox');
			if(check_box.prop('checked')){
				check_box.prop('checked',false);
				RowOutEditMode(tr);
			}else{
					check_box.prop('checked',true);
					RowIntoEditMode(tr);
			}
		})
	}else{
				$(tb).children().each(function(){
					var tr=$(this);
					var check_box =tr.children().first().find(":checkbox");
					if(check_box.prop('checked')){
						check_box.prop('checked',false);
					}else{
						check_box.prop('checked',true);
					}
				})
			}
}


function CheckCancel(mode,tb){
		//1.ȡ��ѡ��checkbox
		//2.����Ѿ�����༭ģʽ����ѡ�����˳��༭״̬
	$(tb).children().each(function(){
		var tr = $(this)
		var isChecked = tr.find(":checkbox").prop('checked');
		if(isChecked == true){
			tr.find(":checkbox").prop('checked',false);
			var isEditing = $(mode).hasClass('editing');
			if(isEditing){
				//��ǰ�У��˳��༭ģʽ
				RowOutEditMode(tr);
			}
		}
		
	})
}

function EditMode(ths,tb){
	var isEditing = $(ths).hasClass('editing');
	if(isEditing){
			$(ths).removeClass('editing');
			$(ths).text('����༭ģʽ');
			$(tb).children().each(function(){
				var tr= $(this);
				var isChecked = tr.find(":checkbox").prop('checked');
				if(isChecked){
					RowOutEditMode(tr);
				}
			})
	}else{
			$(ths).addClass('editing');
			$(ths).text('�˳��༭ģʽ')
			$(tb).children().each(function(){
				var tr = $(this);
				var isChecked = tr.find(":checkbox").prop('checked');
				if(isChecked == true){
					RowIntoEditMode(tr);
				}
			})
	}
}


function RowIntoEditMode(tr){
	tr.children().each(function(){
	var td=$(this);
	if(td.attr('edit') == 'True'){
		if(td.attr('edit-type') == "select"){
			var all_values = window[td.attr('global-key')];
			console.log(all_values)
			var select_val = td.attr('select_val');
			select_val = parseInt(select_val);
			var options = "";
			$.each(all_values, function(index, value){
				if(select_val == value.id){
					options += "<option selected='selected' >" + value.text + "</option>"
				}else{
						options += "<option>" + value.text + "</option>"
				}
			})
			var temp = "<select onchange='MultiChange(this);'>" + options + "</select>";
			td.html(temp);	
		}else{
			
				var text = td.text();
				var temp = "<input type='text' value='" +text+ "'/>";
				td.html(temp);
			}
		}
	})
}

function RowOutEditMode(tr){
		tr.children().each(function(){
					var td=$(this);
					if(td.attr('edit') == 'True'){
						var inp =td.children();
						var input_value = inp.val();
						console.log(inp)
						td.text(input_value);
					}
				})
}

$(function(){
	$('#tb').find(':checkbox').click(function(){
		var tr=$(this).parent().parent();
		if($('#edit_mode').hasClass('editing')){
			if($(this).prop('checked')){
				RowIntoEditMode(tr);
			}else{
				RowOutEditMode(tr);
				//console.log($(this).prop('checked'))
			}
		}
	})
})


//����ctrl���Ĵ���Ϊʲô�ں������棿��Ϊ��������¼���ʱ���ұ���Ҫ֪���û��Ƿ���ctrl����
globalCtrlKeyPress = false;
window.onkeydown = function(event){
//console.log(event.keyCode);
	if(event && event.keyCode == 17){
		window.globalCtrlKeyPress = true;
	}else{
		window.globalCtrlKeyPress = false;
	}
}
//���ﻹ��һ��Сbug�����ǰ���ctrl֮�󡤣������ٰ���ļ�ֵ�������û�����


function MultiChange(ths){
	console.log(window.globalCtrlKeyPress)
	
	if(window.globalCtrlKeyPress == true){
		//�ҵ�td����tr�е�����λ��
		var index = $(ths).parent().index(); //��������ֵӦ��Ϊ4
		var value = $(ths).val();
		//ѭ�����б�ѡ��״̬��checkbox,��Ϊֻ��ѡ��״̬�Ĳ���Ҫ�޸�
		$(ths).parent().parent().nextAll().find("td input[type='checkbox']:checked").each(function(){
			$(this).parent().parent().children().eq(index).children().val(value);
			console.log($(this).parent().parent().children())
			//����Ϊʲô�Ǹ��׵ĸ��׵Ķ��ӣ���Ϊ���֮�丸�ף���ô��ֻ�ҵ�һ��tr������������tr.
		});	
	}
}
