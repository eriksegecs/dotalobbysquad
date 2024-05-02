
import { useEffect } from 'react'
import '../app/playerstable/dataTables.bootstrap4.min.css'
import $ from 'jquery'
import 'datatables.net'

type Attribute = {
  Name: string
  Value: string
};

type Player = {
  Username: string
  Attributes: Attribute[]
  UserCreateDate: string
  UserLastModifiedDate: string
  Enabled: boolean
  UserStatus: string
  steamid: string
  communityvisibilitystate: number
  profilestate: number
  personaname: string
  commentpermission: number
  profileurl: string
  avatar: string
  avatarmedium: string
  avatarfull: string
  avatarhash: string
  lastlogoff: number
  personastate: number
  primaryclanid: string
  timecreated: number
  personastateflags: number
  steamid32: number
  realname?: string
  loccountrycode?: string
};

type ApiResponse = {
  statusCode: number
  headers: {
    event: string
  }
  body: Player[]
}

export default function PlayersTable() {
  const endpointUrl = 'https://www.lobbysquad.com.br/api/v1/players'

  // Ensure that this code runs only in the client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const populateDataTable = (data: ApiResponse) => {
        const columns = [
          {
            data: 'avatarmedium',
            render: (data: string, row: Player) =>
              `<img src="${data}" alt="Avatar de ${row.personaname}" width="50" />`
          },
          {
            data: 'personaname',
            render: (data: string, row: Player) =>
              `<a href="${row.profileurl}" target="_blank">${data}</a>`
          },
          {
            data: 'realname',
            render: (data: string) => data || ''
          },
          {
            data: 'Attributes',
            render: (data: Attribute[], row: Player) => {
              const teamAttr = data.find((attr) => attr.Name === 'custom:actual_team')
              if (teamAttr) {
                return `
                  <div class="team-container">
                    <span class="team" data-personaname="${row.personaname}" data-team="${teamAttr.Value}">
                      ${teamAttr.Value}
                    </span>
                    <button class="edit-icon" title="Editar Equipe">&#9998;</button>
                  </div>`
              } else {
                return ''
              }
            },
          },
          {
            data: 'Attributes',
            render: (data: Attribute[]) => {  
              const mmrAttr = data.find((attr) => attr.Name === 'custom:mmr')
              return mmrAttr ? mmrAttr.Value : ''
            },
          },
          {
            data: 'Attributes',
            render: (data: Attribute[]) => {
              const mmrMedioAttr = data.find((attr) => attr.Name === 'custom:mmr_medio_120')
              return mmrMedioAttr ? mmrMedioAttr.Value : ''
            },
          },
        ];

        const table = $('#userTable').DataTable({
          data: data.body,
          columns: columns,
          initComplete: function () {
            const tableWrapper = (this as any).api().table().container()
            tableWrapper.style.background = 'black'

            $('#userTable').on('click', '.edit-icon', function (event) {
              event.stopPropagation()
              const teamContainer = $(this).closest('.team-container')
              const personaname = teamContainer.find('.team').data('personaname')
              const currentTeam = teamContainer.find('.team').data('team')
              const newTeam = prompt(`Editar equipe para: ${personaname}`, currentTeam)
              if (newTeam !== null) {
                const rowData = table.row($(this).parents('tr')).data() as Player
                const teamAttr = rowData.Attributes.find((attr) => attr.Name === 'custom:actual_team')
                if (teamAttr) {
                  teamAttr.Value = newTeam
                  table.row($(this).parents('tr')).invalidate()
                }
              }
            });
          },
        });
      };

      fetch(endpointUrl)
        .then((response) => response.json())
        .then((data: ApiResponse) => {
          if (data.statusCode === 200) {
            populateDataTable(data)
          } else {
            console.error('Erro na resposta da API.')
          }
        })
        .catch((error) => console.error('Erro na requisição:', error))
    }
  }, []);

  return (
    <div className='container' data-aos='fade-up'>
      <h1>Tabela de players</h1>
      <table id='userTable' className='display' style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nickname</th>
            <th>Real Name</th>
            <th>Team</th>
            <th>MMR Atual</th>
            <th>MMR Médio</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  )
}