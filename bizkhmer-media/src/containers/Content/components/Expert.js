import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { putData } from '../../../util/updateData';
import arrayMove from 'array-move';
import uuidv4 from 'uuid/v4';

const SortableItem = SortableElement(
  ({ team, setSelectInput, fileInput, onRemoveTeam, index, updateLink }) => (
    <li className=" animated  column column-block" data-animated="fadeInUp">
      <div style={{ padding: 20, position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className="team-member__picture"
            style={{ position: 'relative' }}
          >
            <img
              width={314}
              height={314}
              src={
                team.avatar !== ''
                  ? team.avatar
                  : require('../../../images/team-1-314x314.png')
              }
              className="preview-team-avatar attachment-digixon_team_style1 size-digixon_team_style1 wp-post-image"
              alt="team-1.png"
              sizes="(max-width: 314px) 100vw, 314px"
            />
            <div className={'team-avatar'}>
              <button
                className="upload-button"
                onClick={() => {
                  setSelectInput(team.uuid);
                  fileInput.current.click();
                }}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
        <div className="team-member__info" style={{ minHeight: 355 }}>
          <h5
            className="team-member__name"
            id={`team_name-${team.uuid}`}
            data-team="name"
          >
            <span>{team.name}</span>
          </h5>
          <p
            className="team-member__job"
            id={`team_position-${team.uuid}`}
            data-team="position"
          >
            <span>{team.position}</span>
          </p>
          <p data-team="description" id={`team_description-${team.uuid}`}>
            {team.description}
          </p>
        </div>
        <div className="team-member__socialmedia">
          <ul>
            <li>
              <a
                onClick={() => updateLink(index, 'fb', team.fb)}
                style={{ cursor: 'pointer' }}
              >
                <i className="fab fa-facebook-f" style={{ color: '#fff' }} />
              </a>
            </li>
            <li>
              <a
                onClick={() => updateLink(index, 'instagram', team.instagram)}
                style={{ cursor: 'pointer' }}
              >
                <i className="fab fa-instagram" style={{ color: '#fff' }} />
              </a>
            </li>
            <li>
              <a
                onClick={() => updateLink(index, 'twitter', team.twitter)}
                style={{ cursor: 'pointer' }}
              >
                <i className="fab fa-twitter" style={{ color: '#fff' }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          padding: '15px',
          textAlign: 'center',
          marginTop: '15px'
        }}
      >
        <button
          style={{ cursor: 'pointer', padding: 10, color: 'red' }}
          onClick={() => onRemoveTeam(index)}
        >
          Remove
        </button>
      </div>
    </li>
  )
);

const SortableList = SortableContainer(
  ({ items, setSelectInput, fileInput, onRemoveTeam, updateLink }) => {
    return (
      <ul className="team-list-style3 small-up-1 medium-up-2 large-up-2 xlarge-up-4 clearfix">
        {items.map((value, index) => (
          <SortableItem
            key={`item-${value.uuid}`}
            index={index}
            team={value}
            onRemoveTeam={onRemoveTeam}
            setSelectInput={setSelectInput}
            fileInput={fileInput}
            updateLink={updateLink}
          />
        ))}
      </ul>
    );
  }
);
export default function Expert(props) {
  const fileInput = useRef(null);
  const [selectInput, setSelectInput] = useState(null);
  const { expert_title, sub_expert_title, id } = props.content;
  const [teams, setTeams] = useState([]);
  const [images, setImages] = useState({});
  const uploadImage = async file => {
    const response = await axios.post(
      'https://vzrs5eev4k.execute-api.ap-southeast-1.amazonaws.com/dev/requestUploadURL',
      { name: file.name, type: file.type }
    );
    const fd = new FormData();
    fd.append('file', file);
    await fetch(response.data.uploadURL, {
      method: 'PUT',
      body: file
    });
    return `https://s3.ap-southeast-1.amazonaws.com/bizkhmer-media-image/${file.name}`;
  };
  const updateTeams = async () => {
    const data = [];
    const promises = teams.map(async team => {
      const keys = [
        `team_name-${team.uuid}`,
        `team_position-${team.uuid}`,
        `team_description-${team.uuid}`
      ];
      keys.map(key => {
        const element = document.getElementById(key);
        const text = element.textContent;
        const field = element.dataset.team;
        team[field] = text;
      });
      if (images[team.uuid]) {
        team.avatar = await uploadImage(images[team.uuid]);
      }
      data.push(team);
      return team;
    });
    await Promise.all(promises);
    putData(id, 'teams', JSON.stringify(data));
  };
  const initInlineEditor = id => {
    InlineEditor.create(document.getElementById(id), {
      toolbar: []
    })
      .then(editor => {
        editor.ui.focusTracker.on(
          'change:isFocused',
          (evt, name, isFocused) => {
            if (!isFocused) {
              // updateData(editor, oldValue);
            }
          }
        );
      })
      .catch(err => {
        console.error(err.stack);
      });
  };

  const updateLink = (index, field, value) => {
    let data = '';
    data = window.prompt('Please enter icon URL', value);
    teams[index][field] = data;

    if (!(data == '' || data == null)) {
      setTeams([...teams]);
    }
  };

  const inlineEditor = index => {
    initInlineEditor(`team_name-${index}`);
    initInlineEditor(`team_position-${index}`);
    initInlineEditor(`team_description-${index}`);
  };

  const addNewMember = () => {
    const team = {
      name: 'Team Name',
      position: 'Position',
      fb: '',
      instagram: '',
      twitter: '',
      description: 'Description',
      uuid: uuidv4(),
      avatar: ''
    };
    setTeams([...teams, team]);
    setTimeout(() => {
      inlineEditor(team.uuid);
    }, 500);
  };
  const initInlineEditors = data => {
    setTimeout(() => {
      data.map((team, index) => {
        inlineEditor(team.uuid);
      });
    }, 500);
  };

  const onRemoveTeam = index => {
    let data = teams;
    data.splice(index, 1);
    setTeams([...data]);
  };

  useEffect(
    () => {
      if (teams.length <= 0) {
        if (props.content.teams) {
          const json = JSON.parse(props.content.teams);
          setTeams(json);
          initInlineEditors(json);
        }
      }
    },
    [props.content]
  );

  const onFileInputChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImages(Object.assign({}, images, { [selectInput]: file }));
      const data = teams.map(team => {
        if (team.uuid === selectInput) team.avatar = reader.result;
        return team;
      });

      setTeams(data);
    };

    reader.readAsDataURL(file);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const sortTeams = arrayMove(
      teams,
      oldIndex,
      newIndex
    ).map((team, index) => {
      team.order = index;
      return team;
    });
    setTeams([...sortTeams]);
  };

  return (
    <div
      data-animation-delay={300}
      className="vc_row wpb_row vc_row-fluid"
      id="team-element"
    >
      <div className="wpb_column vc_column_container vc_col-sm-3">
        <div className="vc_column-inner">
          <div className="wpb_wrapper" />
        </div>
      </div>
      <div style={{ display: 'none' }}>
        <input type="file" ref={fileInput} onChange={onFileInputChange} />
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-6">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className="wd_empty_space"
              data-heightmobile={0}
              data-heighttablet={0}
              data-heightdesktop={61}
            />
            <div
              className="wd_empty_space"
              data-heightmobile={50}
              data-heighttablet={70}
              data-heightdesktop={23}
            />
            <div
              className="wd-heading text-center  "
              style={{ maxWidth: '100%', margin: '0 auto' }}
            >
              <h3 style={{ margin: 0 }} className="title_a" id="expert_title">
                {expert_title}
              </h3>
              <h4 style={{}} className="sub_title_a" id="sub_expert_title">
                {sub_expert_title}
              </h4>
            </div>
            <div
              className="wd_empty_space"
              data-heightmobile={50}
              data-heighttablet={70}
              data-heightdesktop={100}
            />
          </div>
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-3">
        <div className="vc_column-inner">
          <div className="wpb_wrapper" />
        </div>
      </div>
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              className="text-right"
              style={{ marginBottom: '25px', marginRight: '30px' }}
            >
              <button
                className="wd-btn btn-solid btn-color-2 hover-color-1 btn-small btn-round  icon-after"
                onClick={addNewMember}
              >
                New Expert
              </button>

              <button
                className="wd-btn btn-solid btn-color-2 hover-color-1 btn-small btn-round  icon-after"
                onClick={updateTeams}
                style={{ marginLeft: 10 }}
              >
                Update
              </button>
            </div>
            <SortableList
              items={teams.sort((a, b) => a.order - b.order)}
              onSortEnd={onSortEnd}
              setSelectInput={setSelectInput}
              fileInput={fileInput}
              onRemoveTeam={onRemoveTeam}
              updateLink={updateLink}
              axis="xy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
