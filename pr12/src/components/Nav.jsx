import { TabMenu } from 'primereact/tabmenu';

function Nav(){
    const items = [
        {label: 'Home',},
        {label: 'Services', },
        {label: 'Our Works', },
        {label: 'Clients', },
        {label: 'Contact', }
    ];

    return (
        <div className="card">
            <h1>Edie</h1>
            <TabMenu model={items} />
        </div>
    )
}

export default Nav