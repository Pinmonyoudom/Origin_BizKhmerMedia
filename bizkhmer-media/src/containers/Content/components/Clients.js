import React, {useEffect, useState, useRef} from "react";
import uuidv4 from "uuid/v4";
import Modal from "react-modal";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "480px"
  }
};

Modal.setAppElement("#root");

export const Clients = ({content}) => {
  const fileInputRef = useRef(null);
  const {id} = content;
  const [imagePreview, setImagePreview] = useState("");
  const [selectClient, setSelectClient] = useState({});
  const [clients, setClients] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (content.clients) {
      setClients(JSON.parse(content.clients));
    }
  }, [content.clients]);
  const addMoreClient = () => {
    const client = {
      name: "",
      description: "",
      url: "",
      image: "",
      uuid: uuidv4()
    };
    setSelectClient(client);
    setOpenModal(true);
  };

  const onUploadClientImage = e => {
    fileInputRef.current && fileInputRef.current.click();
  };

  const onChangeFileUpload = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file.size / 1024 > 1024) {
      alert("File is too large. Max: 1024KB");
      return;
    }
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setSelectClient({...selectClient, image: file});
    };

    reader.readAsDataURL(file);
  };

  const fetchSignUploadUrl = async file => {
    const response = await axios.post(
      "https://vzrs5eev4k.execute-api.ap-southeast-1.amazonaws.com/dev/requestUploadURL",
      {name: file.name, type: file.type}
    );
    if (file.size / 1024 > 1024) {
      alert("File is too large. Max: 1024KB");
      return;
    }
    const fd = new FormData();
    fd.append("file", file);
    await fetch(response.data.uploadURL, {
      method: "PUT",
      body: file
    });
    return `https://s3.ap-southeast-1.amazonaws.com/bizkhmer-media-image/${
      file.name
    }`;
  };

  const updateClient = data => {
    axios
      .put(
        `https://vzrs5eev4k.execute-api.ap-southeast-1.amazonaws.com/dev/contents/${id}`,
        {clients: JSON.stringify(data)}
      )
      .then(res => {
        setOpenModal(false);
        setImagePreview("");
        setSelectClient("");
      });
  };
  const onSaveClient = async () => {
    if (selectClient.image && imagePreview) {
      selectClient.imageUrl = await fetchSignUploadUrl(selectClient.image);
      delete selectClient.image;
      let data = clients;
      const index = data.findIndex(client => client.uuid === selectClient.uuid);
      if (index >= 0) data[index] = selectClient;
      else data = [...data, selectClient];
      setClients([...data]);
      updateClient(data);
    }
  };

  const onRemoveClient = client => {
    const data = clients.filter(c => c.uuid !== client.uuid);
    setClients([...data]);
    updateClient(data);
  };

  return (
    <div>
      <div
        data-vc-full-width="true"
        data-vc-full-width-init="false"
        data-animation-delay={300}
        className="vc_row wpb_row vc_row-fluid vc_custom_1553190645373 vc_row-has-fill"
      >
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div
                className="wd-clients-carousel-1 nav_arrow"
                data-clientshow={6}
              >
                {clients.map(client => {
                  return (
                    <div
                      key={client.uuid}
                      style={{display: "inline-grid", margin: 10}}
                    >
                      <div
                        className="wd-clients-carousel-item"
                        style={{marginRight: 15, marginBottom: 10}}
                        onClick={() => {
                          setSelectClient(client);
                          setImagePreview(client.imageUrl);
                          setOpenModal(true);
                        }}
                      >
                        <img
                          src={client.imageUrl}
                          width={128}
                          height={68}
                          alt={client.uuid}
                        />
                      </div>
                      <button
                        className="wd-btn btn-solid btn-color-2 hover-color-1 btn-small btn-round  icon-after"
                        onClick={() => onRemoveClient(client)}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="wd-btn btn-solid btn-color-2 hover-color-1 btn-small btn-round  icon-after"
        style={{marginTop: 15}}
        onClick={addMoreClient}
      >
        New More
      </button>
      <Modal
        isOpen={openModal}
        onRequestClose={() => {}}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <input
            type="text"
            name="client_name"
            placeholder="Client Name"
            value={selectClient.name || ""}
            onChange={e =>
              setSelectClient({...selectClient, name: e.target.value})
            }
          />
          <textarea
            name="client_description"
            onChange={e =>
              setSelectClient({...selectClient, description: e.target.value})
            }
            placeholder="Work Description"
            value={selectClient.description || ""}
          />
          <input
            type="text"
            name="client_url"
            placeholder="Work URL"
            onChange={e =>
              setSelectClient({...selectClient, url: e.target.value})
            }
            value={selectClient.url || ""}
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{display: "none"}}
            onChange={onChangeFileUpload}
          />
          <label>
            <b>Note:</b> use square image for best (128 x 68)px display
          </label>
          <div className="file-preview-container">
            {imagePreview && (
              <img src={imagePreview} className={"client-images-upload"} />
            )}
            <div className="upload-overlay">
              <button className="upload-button" onClick={onUploadClientImage}>
                Upload
              </button>
            </div>
          </div>
          <div style={{marginTop: 10}}>
            <button
              className="wd-btn btn-solid btn-color-2 hover-color-1 btn-small btn-round  icon-after"
              onClick={() => {
                setOpenModal(false);
                setSelectClient({});
                setImagePreview("");
              }}
              style={{marginRight: 10}}
            >
              Cancel
            </button>
            <button
              className="wd-btn btn-solid btn-color-2 hover-color-1 btn-small btn-round  icon-after"
              onClick={onSaveClient}
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
