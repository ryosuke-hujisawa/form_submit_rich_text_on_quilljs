var quill = new Quill('#editor-text', {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],          
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],  
      [{ 'indent': '-1'}, { 'indent': '+1' }],    
      [{ 'direction': 'rtl' }],                      
      [{ 'size': ['small', false, 'large', 'huge'] }],  
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['link', 'blockquote', 'code-block', 'image'],
      [{ list: 'ordered' }, { list: 'bullet' }]
    ]
  },
  placeholder: 'Text',
  theme: 'snow'
});

var quill2 = new Quill('#editor-name', {
  modules: {
    "toolbar": false
  },
  placeholder: 'Name',
  theme: 'snow'
});

var form = document.querySelector('form');
form.onsubmit = function() {
  var about = document.querySelector('input[name=about]');
  about.value = JSON.stringify(quill.getContents());
  location.href = './show.html?name=' +  quill2.root.innerHTML + '&text=' + quill.root.innerHTML
  return false;
};

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
