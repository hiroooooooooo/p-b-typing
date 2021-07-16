class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      
      t.integer :level, default: 1
      t.integer :point, default: 0
      t.integer :count, default: 0
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
