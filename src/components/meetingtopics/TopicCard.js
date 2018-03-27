// @flow

import React from 'react';

import type {Topic} from '../../types/kanban';

type Props = {
  topic: Topic,
  selected: boolean,
  index: number,
  onEdit: (topic : Topic) => void
};

class TopicCard extends React.Component<Props> {
    onEditClicked = (event: SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault();
        this.props.onEdit(this.props.topic);
    }

    render() {
        return (
            <div key={this.props.topic.id} {...this.props.topic} className={ "kanban-topic " + (this.props.selected ? "kanban-topic-selected" : "")}>
                <div className='kanban-topic-name'>{this.props.topic.name}</div>
                <div className='kanban-topic-description'>{this.props.topic.description}</div>
                <button onClick={this.onEditClicked}>Edit</button>
            </div>
        )
    }
}

export default TopicCard;