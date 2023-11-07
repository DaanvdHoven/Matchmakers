import React, { Component } from 'react';
import './/css/home.css';
export class Home extends Component {
  static displayName = Home.name;

  render() {
      return (
          <div className="content">
          <input type="text" placeholder="Search.."/>
          <div className="content_block d-flex">
            <h1>Challenge 1</h1>
            <p>Lorem ipsum dolor sit amet. Ab nobis quidem in quasi quia eum molestiae dolorem. Sit adipisci ipsum et porro tempora qui officia eaque non accusamus veritatis ut nobis culpa et voluptas deserunt. Sed quia alias ut facere fugit vel maiores numquam sed suscipit excepturi At perferendis facilis non perspiciatis tempore et nulla commodi. Eos alias quia eum sunt sint a accusamus repellat est odit doloribus vel consequuntur veniam et dolorum magni hic omnis dolor.</p>
                  <div className="d-flex flex-wrap">
                     
                      <p className="p-2">Tags:</p>
                      <div className="p-2">
                      #tag
                  </div>
                      <div className="p-2">
                      #tag
                  </div>
                      <div className="p-2">
                      #tag
                      </div>
                      <button className="p-2" type="submit">Meer info</button>
                      <button className="p-2" type="submit">Aanmelden</button>
              </div>
          </div>
    </div>
    );
  }
}
