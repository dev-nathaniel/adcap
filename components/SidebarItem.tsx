const SidebarItem = ({itemName}: {itemName: String}) => {
    return (
        <div>
            {/* item icon */}
            <div></div>
            {/* item name */}
            <div>
                <p>{itemName}</p>
            </div>
            {/* absolute background */}
            <div></div>
        </div>
    );
}

export default SidebarItem;