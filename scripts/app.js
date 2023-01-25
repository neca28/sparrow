
emailjs.init('DOdUWyvwfTY0Bfba5');
window.onload = function(){
    const subbtn = document.getElementById("form_sub");
    const sub_form = subbtn.closest("form");
    const button = document.getElementById("apply-sub");
    var form = document.getElementById('apply-form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        var name = document.getElementById('apply-name').value+" "+document.getElementById('apply-lastname').value;
        var params = {
            from_name : name,
            email : document.getElementById('apply-mail').value,
            phone : document.getElementById('apply-tel').value,
            years_of_exp : document.getElementById('apply-yoe').value,
            type_of_emp : document.getElementById('apply-toe').value,
            message : document.getElementById('apply-mess').value
        }
        emailjs.send("service_9lyqbii","template_wk66k99",params);
        const modal = button.closest('.apply-modal');
        closeModal(modal);
        body.removeAttribute("style");
        }); 

    sub_form.addEventListener('submit',function(event){
        event.preventDefault();
        var sub_params={
            contact: document.getElementById("contact_input").value,
            pu: document.getElementById("from").value,
            pu_date: document.getElementById("pu_date").value,
            del: document.getElementById("to").value,
            del_date: document.getElementById("del_date").value,
        }
        emailjs.send("service_9lyqbii","template_6u30y7n",sub_params);
        setTimeout(reset_values(),800);
        $(this).unbind('submit').submit();
    });    
    }

function closeModal(modal){
    if(modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
    }

function reset_values(){
    document.getElementById("contact_input").value ="";
    document.getElementById("from").value = "";
    document.getElementById("pu_date").value = "";
    document.getElementById("to").value = "";
    document.getElementById("del_date").value = "";
}    