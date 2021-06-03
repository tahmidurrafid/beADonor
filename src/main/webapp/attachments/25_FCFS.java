import java.util.Comparator;
import java.util.PriorityQueue;

class GlobalTimer{
     // it will handle the time ;
    int time ;
    public GlobalTimer(int time){
        this.time = time ;
    }
}

class Process{
    // process ID , process name , arrival time , duration , a variable from globalTimer class to handle time ;
    int ID,arrivalTime,duration ;
    String name ;
    GlobalTimer globalTimer ;

    public Process(int ID,String name,int arrivalTime, int duration, GlobalTimer globalTimer){
        this.ID = ID ;
        this.name = name ;
        this.arrivalTime = arrivalTime ;
        this.duration = duration ;
        this.globalTimer = globalTimer ;
    }

    public int getID(){return ID ;}
    public String getName(){return name ;}
    public int getArrivalTime(){return arrivalTime ;}
    public int getDuration(){return duration ;}
    public GlobalTimer getGlobalTimer() {  return globalTimer; }

    // method : runProcess() : run each of the selected process ;
    void runProcess(){
        for(int i=0;i<duration;i++){
            System.out.println("running process id : " + ID);
            System.out.println("Global Time : " + globalTimer.time);
            globalTimer.time++ ;
        }
        System.out.println("process id : " + ID + "completed its job");
    }
}
public class FCFS {
    static PriorityQueue<Process> processQueue = new PriorityQueue<Process>(
            10, new Comparator<Process>() {
            @Override
            public int compare(Process p1, Process p2) {
                return (int)(p1.arrivalTime - p2.arrivalTime);

            }
    }
    );
    static PriorityQueue<Process> readyQueue = new PriorityQueue<Process>(
            10, new Comparator<Process>() {
        @Override
        public int compare(Process p1, Process p2) {
            return (int)(p1.arrivalTime - p2.arrivalTime);

        }
    }
    );
    static GlobalTimer globalTimer = new GlobalTimer(0);

    static void runProcessInCPU(){
        Process process = readyQueue.poll();// retrive and remove the process(having smallest arrival time) from the readyQueue.
        process.runProcess();
    }

    static boolean checkIfNewProcessArrived(){
        if(!processQueue.isEmpty()){
            if(processQueue.element().getArrivalTime() <= globalTimer.time){
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        // insert 4 processes in the process queue :
        processQueue.add(new Process(1,"A",3,2,globalTimer) );
        processQueue.add(new Process(2,"B",6,3,globalTimer));
        processQueue.add(new Process(3,"C",1,4,globalTimer));
        processQueue.add(new Process(4,"D",4,5,globalTimer));


        while(true) {
            if (checkIfNewProcessArrived()) {
                while (!processQueue.isEmpty() && processQueue.element().getArrivalTime() <=
                        globalTimer.time) {
                    readyQueue.add(processQueue.poll());
                }
            }
            if(!readyQueue.isEmpty())
                runProcessInCPU();
            else {
                System.out.println("No process is in Ready Queue");
                System.out.println("Global time: "+globalTimer.time);
                globalTimer.time++;
            }
        }

    }
}
