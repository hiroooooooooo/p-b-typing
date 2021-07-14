class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      
      t.integer :level, default: 0
      t.integer :point
      t.integer :count
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
