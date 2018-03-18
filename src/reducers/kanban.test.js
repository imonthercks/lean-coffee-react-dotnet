import { moveTopic } from '../actions/kanban'
import reduce, { MOVE_TOPIC } from './kanban'

test('MOVE_TOPIC changes column topic is displayed in', () => {
    // Given initial state
    const initialState : KanbanState = {
        columns: [
          {
            id: "1",
            name: "To Discuss",
            topics: [
              {
                id: 'a',
                name: 'test',
                description: 'test description'
              }
            ]
          },
          {
            id: "2",
            name: "Discussing",
            topics: []
          }
        ],
        topicBeingCreated: false
    };

    // When action is reduced
    const resultingState = reduce(initialState, moveTopic(
        {
            columnId: "1",
            verticalIndex: 0
        },
        {
            columnId: "2",
            verticalIndex: 0
        }
    ));

    // Then Topic "a" should be in column "2" index 0
    var column2 = resultingState.columns.find((column) => column.id === "2");
    expect(column2.topics[0].id === "a");
});
