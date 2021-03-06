import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {

    render() {
        let downIcon = <svg width={14} height={14} viewBox="0 0 512 512"> <path d="M382.56 233.376A15.96 15.96 0 00368 224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832 0-16 7.168-16 16v208h-64a16.013 16.013 0 00-14.56 9.376c-2.624 5.728-1.6 12.416 2.528 17.152l112 128A15.946 15.946 0 00256 384c4.608 0 8.992-2.016 12.032-5.472l112-128c4.16-4.704 5.12-11.424 2.528-17.152z" /> <path d="M432 352v96H80v-96H16v128c0 17.696 14.336 32 32 32h416c17.696 0 32-14.304 32-32V352h-64z" /> </svg>;
        return(
            <div className="footer">
                <a href="http://acupdate.gamersclub.com.br/download" className="btn-anti"> {downIcon} <span>Download Gamers Club Anti-Cheat</span></a>
                <div className="footer-info">
                    <div className="text-info">
                        <div className="online">{this.props.online}</div>
                        <div>
                            <p>Jogadores</p>
                            <p className="online">Online</p>
                        </div>
                    </div>
                    <div className="text-info">
                        <div className="banned">{this.props.banned}</div>
                        <div>
                            <p>Cheaters Banidos</p>
                            <p className="banned">Nos Últimos 7 Dias</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
