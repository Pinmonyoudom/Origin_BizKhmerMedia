import axios from 'axios';

export function updateData(id, element, oldValue, html = false) {
  const field = window
    .jQuery(element.ui.view.editable.element)
    .attr('id')
    .replace(/-/g, '_');
  const value = html
    ? element.getData()
    : window.jQuery(element.ui.view.editable.element).text();
  if (oldValue === value) return;
  putData(id, field, value);
}

export function putData(id, field, value) {
  const headers = {
    Authorization: window.localStorage.getItem('userToken')
  };
  axios.put(
    `https://vzrs5eev4k.execute-api.ap-southeast-1.amazonaws.com/dev/contents/${id}`,
    { [field]: value },
    {
      headers: headers
    }
  );
}
