import { moveTopic } from '../actions/kanban'
import reduce, { MOVE_TOPIC } from './kanban'

test('MOVE_TOPIC changes column topic is displayed in', () => {
    // Given initial state
    let initialState : KanbanState = {
        topics: [
          {
            id: 'a',
            name: 'test',
            description: 'test description'
          }
        ],
        columns: [
          {
            id: "1",
            name: "To Discuss",
            topics: [
              {
                id: 'a'
              }
            ]
          },
          {
            id: "2",
            name: "Discussing",
            topics: []
          }
        ],
        topicBeingUpdated: false
    };
    
    // When action is reduced
    let action = moveTopic(
        {
            columnId: "1",
            verticalIndex: 0
        },
        {
            columnId: "2",
            verticalIndex: 0
        }
    );
    let resultingState = reduce(initialState, action);

    // Then Topic "a" should be in column "2" index 0
    var column2 = resultingState.columns.find((column) => column.id === "2");
    expect(column2.topics[0].id).toEqual("a");
});

test('MOVE_TOPIC positions topic in new column correctly', () => {
    // Given initial state
    let initialState : KanbanState = {
      topics: [
        {
          id: 'a',
          name: 'test',
          description: 'test description'
        },
        {
          id: 'b',
          name: 'test',
          description: 'test description'
        },
        {
          id: 'c',
          name: 'test',
          description: 'test description'
        }
      ],
        columns: [
          {
            id: "1",
            name: "To Discuss",
            topics: [
              {
                id: 'a'
              }
            ]
          },
          {
            id: "2",
            name: "Discussing",
            topics: [
                {
                  id: 'b'
                },
                {
                  id: 'c'
                }
              
              ]
          }
        ],
        topicBeingUpdated: false
    };

    // When action is reduced
    let action = moveTopic(
        {
            columnId: "1",
            verticalIndex: 0
        },
        {
            columnId: "2",
            verticalIndex: 1
        }
    );

    let resultingState = reduce(initialState, action);

    // Then Topic "a" should be in column "2" index 0
    var column2 = resultingState.columns.find((column) => column.id === "2");
    expect(column2.topics[1].id).toEqual("a");
});
