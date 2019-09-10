import React, { useEffect } from 'react';
import { initClients } from '../../../util/initClientSlider';
export const Clients = ({ data }) => {
  if (!data.length) return null;

  useEffect(() => {
    initClients();
  }, []);

  return (
    <div>
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="wd-clients-carousel" data-clientshow={8}>
              {data.map(client => {
                return (
                  <div className="wd-clients-carousel-item " key={client.uuid}>
                    <a href={client.url}>
                      <img
                        src={client.imageUrl}
                        width={128}
                        height={68}
                        alt={client.name}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
